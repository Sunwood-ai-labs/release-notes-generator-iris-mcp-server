import { Server } from '@modelcontextprotocol/sdk/server/index.js';

export interface IrisServerOptions {
  workingDir?: string;
}

export interface TagDiffInput {
  startTag: string;
  endTag: string;
  outputPath?: string;
  workingDir?: string;
}

export interface ReleaseNoteInput {
  startTag: string;
  endTag: string;
  title?: string;
  features?: string[];
  improvements?: string[];
  bugfixes?: string[];
  breaking?: string[];
  workingDir?: string;
}

export interface GitContext {
  workingDir: string;
}

export interface ServerContext {
  server: Server;
}

export interface HeaderImageInput {
  version: string;
  repoName: string;
  workingDir: string;
  outputPath?: string;
}
