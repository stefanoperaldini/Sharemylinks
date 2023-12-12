
export const notFoundError = (resource) => {
  throw {
      httpStatus: 404,
      code: 'RESOURCE_NOT_FOUND',
      message: `Este recurso solicitado '${ resource }' no se encuentra.`
  }
}

