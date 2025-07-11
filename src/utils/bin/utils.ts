import * as bin from './index';
import packageJson from '../../../package.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:

  cowsay    - configurable speaking cow
  date      - print or set the system date and time
  echo      - display a line of text
  emacs     - GNU project Emacs editor
  email     - you know what email is ;)
  neofetch  - a fast, highly customizable system info script
  vim       - vi IMproved, a programmer's text editor
  weather   - command-line tool to obtain weather conditions and forecasts
  whoami    - print effective userid
  projects  - list of my public projects on GitHub
  repo      - the repository of this beauty :D
  resume    - my CV in pdf

  home      - back to the home page
  
  theme [arg] - use wide range of themes
  trex        - play t-rex without disconnection :D

  github,
  instagram,
  linkedin,
  telegram  - My personal pages on these social networks

  [tab]     trigger completion
  [ctrl+l]  clear terminal
  [ctrl+c]  cancel command
  `;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:amirh.khali@gmail.com');

  return 'Opening mailto:amirh.khali@gmail.com...';
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const koobs = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://youtu.be/yiLXNmPcEzw');
  }, 1000);

  return `Inas ke badeee:D`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(packageJson.repository.url);
  }, 1000);

  return 'Opening repository...';
};

export const home = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.location.replace(packageJson.author.url);
  }, 1000);

  return 'Redirecting to the home page...';
};

export const banner = (args?: string[]): string => {
  return `
  ██╗  ██╗██╗██╗██╗
  ██║  ██║██║██║██║
  ███████║██║██║██║
  ██╔══██║██║██║╚═╝
  ██║  ██║██║██║██╗
  ╚═╝  ╚═╝╚═╝╚═╝╚═╝

- Who am I?

This is Amirhossein Ahmadi. A Software Engineer.👨‍💻
Nice to meet you!


- How to work with this terminal?
Type 'help' to see list of available commands.
`;
};
