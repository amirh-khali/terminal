import packageJson from '../../../package.json';

export const resume = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(packageJson.author.url);
  }, 1000);

  return 'Opening Resume...';
};
