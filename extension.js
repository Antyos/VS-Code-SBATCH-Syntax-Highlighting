const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
    // Register the command for submitting a SLURM job
    let disposable = vscode.commands.registerCommand('sbatch.submitSlurmJob', (uri) => {
        if (uri) {
            const filePath = uri.fsPath;
            const terminal = vscode.window.createTerminal('SLURM Submission');
            
            // Execute sbatch command
            terminal.sendText(`sbatch "${filePath}"`);
            terminal.show();
            
            vscode.window.showInformationMessage(`Submitting SLURM job from file: ${filePath}`);
        } else {
            vscode.window.showErrorMessage("No file selected for submission.");
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
