using System;
using System.Collections;
using System.Collections.Generic;

namespace Aptech.Product.Erp.Api.Response
{
    public class DatabaseResponse<T>
    {


        //  veritabanı işlemleri veya genel olarak API çağrıları sonucunda dönecek olan yanıtı yapılandırmak için kullanılır.
        public bool IsSuccses { get; set; }
        public T Data { get; set; }
        public string Message { get; set; }

        public DatabaseResponse()
        {
                
        }

        public DatabaseResponse<T> CreateSuccses(T data)
        {
            this.IsSuccses = true;
            this.Message = "succses";
            this.Data = data;
            return this;
        }
        public DatabaseResponse<T> CreateError(string message)
        {
            this.IsSuccses = false;
            this.Message = message;
            this.Data = default(T);
            return this;

        }

        public DatabaseResponse<T> CreateException(Exception exception)
        {
            this.IsSuccses = false;
            this.Message = exception.Message + "\n" + exception.StackTrace;
            this.Data = default(T);
            return this;

        }


    }
}
