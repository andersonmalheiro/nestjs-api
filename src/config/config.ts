import { ConfigModuleOptions } from '@nestjs/config';

const config: ConfigModuleOptions = {
  envFilePath: ['.env'],
  isGlobal: true,
}

export default config;
