# SBATCH Syntax Highlighting and SLURM Job Submission for VS Code - build instructions

This extension provides syntax highlighting and job submission features for `.sbatch` files used with SLURM job scheduling.

## Pre-requisites

- [Node.js](https://nodejs.org/en/download/)
- [VS Code](https://code.visualstudio.com/download)

## Build Instructions

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm install vsce@2.15.0 -g` to install the Visual Studio Code Extension Manager.
4. Run `vsce package` to create the `.vsix` file.

## Installation

1. In VS Code, go to the Extensions view by clicking on the square icon in the sidebar.
2. Click on the three dots in the top right corner and select **Install from VSIX...**.
3. Select the `.vsix` file you created in the previous step.
4. For icon support, in the Extensions view, go to the installed extension, click on the **Set icon theme** button, and select the HPC Icon Theme.

## How to Use

1. Open any `.sbatch` file in VS Code to see syntax highlighting.
2. Right-click on the `.sbatch` file in the file explorer and select **Submit a SLURM Job from This File** to submit the job.
