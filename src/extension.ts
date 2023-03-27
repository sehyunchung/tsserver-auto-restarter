import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (
        editor &&
        (editor.document.languageId === "typescript" ||
          editor.document.languageId === "typescriptreact")
      ) {
        restartTSServer();
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("tsserverRestarter.enable", enable)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("tsserverRestarter.disable", disable)
  );
}

function restartTSServer() {
  const config = vscode.workspace.getConfiguration("tsserverRestarter");
  const restartTSServerOnTabChange = config.get<boolean>("enabled");
  if (!restartTSServerOnTabChange) {
    return;
  }
  vscode.commands.executeCommand("typescript.restartTsServer");
}

async function enable() {
  const config = vscode.workspace.getConfiguration("tsserverRestarter");
  await config.update("enabled", true, vscode.ConfigurationTarget.Global);
  vscode.window.showInformationMessage("TSServer Restarter: Enabled");
}

async function disable() {
  const config = vscode.workspace.getConfiguration("tsserverRestarter");
  await config.update("enabled", false, vscode.ConfigurationTarget.Global);
  vscode.window.showInformationMessage("TSServer Restarter: Disabled");
}
export function deactivate() {}
