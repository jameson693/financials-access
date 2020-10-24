import { BASE_PATHS } from '../constants'

type SetUrlParams = {
  hash?: string
  origin?: string
  pathname?: string
  search?: string
}

type addQueryParams = {
  [key: string]: string
}

export default class UrlBuilder {
  url: URL

  constructor(site: string) {
    const baseUrl: string = BASE_PATHS[site]
    this.url = new URL(baseUrl)
  }

  addPath(path: string): UrlBuilder {
    const { pathname } = this.url
    const updatedPath = `${pathname}/${path}`
    this.setUrl({ pathname: updatedPath })
    return this
  }

  addQuery(queryParams: addQueryParams): UrlBuilder {
    const params = Object.entries(queryParams).map(([ key, param ]) => `${key}=${param}`).join('&')
    const { search } = this.url
    const updatedQuery = `${search ? '&' : '?'}${search}${params}`
    this.setUrl({ search: updatedQuery })
    return this
  }

  build(): string {
    return this.url.href
  }

  setUrl({
    hash = this.url.hash,
    origin = this.url.origin,
    pathname = this.url.origin,
    search = this.url.origin,
  }: SetUrlParams): void {
    const updatedUrl = `${origin}${pathname}${search}${hash}`
    this.url = new URL(updatedUrl)
  }
}