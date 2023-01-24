import { useAppData, RequestConfig, AxiosRequestConfig, AxiosResponse } from "umi";
import { getToken } from "@/utils";
import { curr } from "@/services/users";
import useGlobalModel from "./models/global";

console.log('==>App...');
const App = () => {
    const { routes, clientRoutes } = useAppData();
    const { children } = clientRoutes[0];
    console.log('==>App.routes', routes);
    console.log('==>App.clientRoutes', clientRoutes);
}
const defaultRender = () => {
    return <div>loading</div>
}
export function render(oldRender: any) {
    oldRender();
}

const middleware = async (ctx: any, next: any) => {
    // 这里是对请求数据的操作，比如加密或者过滤数据，我们可以在这里操作
    // url 请求不包含 ‘abc’ 时，就做某些操作
    console.log('==>middleware');
    await next();
    // next 执行之后，这部分我们一般是对请求结果做操作，比如统一的错误码处理，或者token失效这些，都可以在这里处理
    // 以下代码只是模拟，正式的写法要根据服务端的约定
    if (ctx.res.errors) {
      const {
        errorCode,
        fieldPath,
        message,
        value } = ctx.res.errors[0];
      if (errorCode === '0000') {
      } else {
        console.log("==> error.");
      }
    }
  };
const requestInterceptor = (options: any) => {
    console.log('==>requestInterceptor.options=', options);
    // const jwt = getToken();
    const jwt = "1234";
    if (jwt != null) {
        options.headers = {
            ...options.headers,
            'Authentication': `Bearer ${jwt}`,
        }
    }
    return options;
}
const responseInterceptor = (response : AxiosResponse) => {
    console.log('==>responseInterceptor.response=', response);
    return response;
}
export const request: RequestConfig = {
    // prefix: '',
    requestInterceptors: [ requestInterceptor ],
    responseInterceptors: [ responseInterceptor ],
    // middlewares: [ middleware ],
    // errorConfig: {
    //   adaptor: (resData: any) => {
    //     return {
    //       ...resData,
    //       success: resData.ok,
    //       errorMessage: resData.message,
    //     };
    //   },
    // },
};