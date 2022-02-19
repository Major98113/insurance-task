import { DataProvider, GetListParams, GetManyParams, GetOneParams } from 'ra-core';
import jsonServerProvider from 'ra-data-json-server';

// tslint:disable-next-line: no-http-string
const URL = 'http://localhost:8080';


export default function (): DataProvider {
  const dataProvider = jsonServerProvider(URL);

  const getList = async (resource: string, params: GetListParams): Promise<any> => {
    const { data } = await dataProvider.getList(resource, params);
    return data;
  };

  const getMany = async (resource: string, params: GetManyParams): Promise<any> => {
    const { data } = await dataProvider.getMany(resource, params);
    return data;
  };

  const getOne = async (resource: string, params: GetOneParams): Promise<any> => {
    const { data } = await dataProvider.getOne(resource, params);
    return data;
  };

  return {
    ...dataProvider,
    getList,
    getMany,
    getOne,
  };
}
