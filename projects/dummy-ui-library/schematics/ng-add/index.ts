import {
  Rule,
  Tree,
  SchematicContext,
  SchematicsException,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { applyToUpdateRecorder } from '@schematics/angular/utility/change';
import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import * as ts from 'typescript';
export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Adding Library Modules to the app...');
    const modulePath = '/src/app/app.module.ts';
    if (!tree.exists(modulePath)) {
      throw new SchematicsException(`The file ${modulePath} does not exist`);
    }
    const recorder = tree.beginUpdate(modulePath);

    const text = tree.read(modulePath);
    if (text === null)
      throw new SchematicsException(`Source file cannot be blank`);

    const source = ts.createSourceFile(
      modulePath,
      text.toString(),
      ts.ScriptTarget.Latest,
      true
    );

    applyToUpdateRecorder(
      recorder,
      addImportToModule(
        source,
        modulePath,
        'DummyUiLibraryModule',
        'dummy-ui-library'
      )
    );

    tree.commitUpdate(recorder);
    context.logger.info('Installing Dependencies...');
    context.addTask(new NodePackageInstallTask({}));
    return tree;
  };
}
