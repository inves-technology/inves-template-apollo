import Koa from 'koa';
import winston from 'winston';
import { Config, getConfig } from './config';
import { createLogger } from './create-logger';

export type Context = {
  logger: winston.Logger;
  config: Config;
  koaContext: Koa.BaseContext;
};

export function createContext(koaContext: Koa.BaseContext): Context {
  const config = getConfig();
  const logger = createLogger(config);
  return { logger, config, koaContext };
}
