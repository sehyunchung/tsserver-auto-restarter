import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (
        editor &&
        (editor.document.languageId === "typescript" ||
          editor.document.languageId === "typescriptreact")
      ) {
        vscode.commands.executeCommand("typescript.restartTsServer");
      }
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
