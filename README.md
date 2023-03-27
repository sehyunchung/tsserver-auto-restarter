<img src="icon.png" width="160">

# TSServer Auto Restarter

If you having some time like image above, enable this. It will restart the TSServer when you move to another ts/tsx file.

## Disclaimer

This extension is... pretty basic. It's just restarting the TSServer when you move to another ts/tsx file. It's not doing anything fancy like checking if the TSServer is actually dead or not. It's just a quick fix for the issue I was having.

## Installation

### Visual Studio Code Marketplace

You can install it via [marketplace page](https://marketplace.visualstudio.com/items?itemName=SehyunChung.tsserver-auto-restarter).

### VSIX

Check out our [Releases](https://github.com/sehyunchung/tsserver-auto-restarter/releases) and download the latest `.vsix` file.

### Hard Way

Also can install it by cloning this repository and running the following:

```bash
npm i
```

```bash
npx vsce package
```

Then install the generated `tsserver-auto-restarter-x.y.z.vsix` file. (You can find the file in the root directory of this repository)

## Usage

<kbd>CMD + Shift + P</kbd> -> TSServer Auto Restarter: Enable (or Disable)

## Contributing

Feel free to open an issue or a pull request.

## License

MIT License
