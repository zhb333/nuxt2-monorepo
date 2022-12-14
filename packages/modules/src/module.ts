import { resolve } from 'path'
import type { Module } from '@nuxt/types'

declare module '@nuxt/types' {
  export interface Context {
    $hello(message: string): string
  }
}

export interface Options {
  a: boolean
  b: number
  c: string
}

const modules: Module<Options> = function (moduleOptions) {
  // Use this, this.options, this.nuxt
  // Use moduleOptions
  console.log('moduel1 loaded!', moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './runtime/plugin.js')
  })
}

export default modules
