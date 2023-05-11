import { Config } from './config';
import { Context } from './create-context';
import { HelloWorldResponse } from './generated/inves-types';

export function helloWorld(context: Context, name: string): HelloWorldResponse {
  try {
    context.logger.info(`helloWorldFunction`);
    const agent = context.koaContext.get('User-Agent');
    const hello = sayHello(context.config, name, agent);
    return { result: hello };
  } catch (error) {
    // Simple example to show logging errors with full stack. Note: error has to be passed to the logger
    context.logger.error('Do you even stack?', error);
    throw error;
  }
}

export function sayHello(config: Config, name: string, agent: string): string {
  return `Hello World! Project=${config.project} Stage=${config.stage} Agent=${agent} name=${name}`;
}
