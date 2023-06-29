{
  description = "DevFlake for PEFS";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";

    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
  };
  outputs = {
    flake-parts,
    nixpkgs,
    ...
  } @ inputs:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = ["x86_64-linux"];
      perSystem = {
        config,
        system,
        pkgs,
        ...
      }: {
        legacyPackages = import nixpkgs {
          config.allowUnfree = true;
          config.allowUnsupportedSystem = true;
          inherit system;
        };
        imports = [{_module.args.pkgs = config.legacyPackages;}];

        devShells.default = pkgs.mkShell {
          name = "PEFS";
          packages = with pkgs; [
            nodePackages.pnpm
            nodePackages.typescript
            nodePackages.typescript-language-server
            nodejs
          ];
          NIX_CONFIG = "extra-experimental-features = nix-command flakes";
          DIRENV_LOG_FORMAT = "";
        };
      };
    };
}
