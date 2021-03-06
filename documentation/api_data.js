define({ "api": [
  {
    "type": "get",
    "url": "/auth/loggedIn",
    "title": "User Logged In",
    "name": "LoggedIn",
    "group": "Authentication",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "read::self:user"
      }
    ],
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.role",
            "description": ""
          }
        ],
        "Error: 4xx": [
          {
            "group": "Error: 4xx",
            "type": "Empty",
            "optional": false,
            "field": "No-response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n        success: true,\n            data: \n                {\n                    \"id\": \"3123123213\",\n                    \"name\": \"User\",\n                    \"email\": \"user@base.com\",\n                },\n            \"role\": \"admin\"\n        }",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/auth.routes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Authentication",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>JWT Token</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "data.expireAt",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true,\n    userId : \"111223\",\n    token : \"adsadafsda123...\",\n    expireAt : 554123123\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 1,\n    error : \"Usuario e senha invalidos\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/auth.routes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "Authentication",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true,\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/auth.routes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/auth/renewAccessToken/",
    "title": "Renew Access Token",
    "name": "RenewAccessToken",
    "group": "Authentication",
    "version": "1.0.0",
    "description": "<p>This Request will renew the JWT Token for the logged user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>JWT Token</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "data.expireAt",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ],
        "Error: 4xx": [
          {
            "group": "Error: 4xx",
            "type": "Empty",
            "optional": false,
            "field": "No-response",
            "description": "<p>if the user is not logged anymore.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true,\n    userId : \"111223\",\n    token : \"adsadafsda123...\",\n    expireAt : 554123123\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/auth.routes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "delete",
    "url": "/element/delete/:elementId",
    "title": "Delete Element Type",
    "name": "DeleteElement",
    "group": "ElementType",
    "version": "1.0.0",
    "permission": [
      {
        "name": "delete::elements"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": ":elementId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  success: true\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/element.type.routes.js",
    "groupTitle": "ElementType"
  },
  {
    "type": "get",
    "url": "/element/list/:elementType",
    "title": "List Element Type",
    "name": "ListElement",
    "group": "ElementType",
    "version": "1.0.0",
    "permission": [
      {
        "name": "read::elements"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": ":elementType",
            "description": "<p>modelType</p>"
          }
        ],
        "query": [
          {
            "group": "query",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>(Use to search a specific element or list elements that the name start with xxx)</p>"
          },
          {
            "group": "query",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>(max 500)</p>"
          },
          {
            "group": "query",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(skip)</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p><code>asc</code> or <code>desc</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.modelType",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>0 = deleted, 1 = enabled</p>"
          },
          {
            "group": "Response: 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>(MongoDB Data Format)</p>"
          },
          {
            "group": "Response: 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>(MongoDB Data Format)</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Data Count</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  success: true,\n  data : \n      [{\n          \"_id\": \"3123123213\",\n          \"name\": \"User\",\n          \"modelType\": \"category\",\n          \"status\" : 1,\n          \"createdAt\": \"2019-05-23T17:00:08.200Z\",\n          \"updatedAt\": \"2019-05-23T17:00:08.200Z\"   \n      }]\n  },\n  count : 1",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/element.type.routes.js",
    "groupTitle": "ElementType"
  },
  {
    "type": "get",
    "url": "/element/view/:elementId",
    "title": "View Element Type",
    "name": "ViewElement",
    "group": "ElementType",
    "version": "1.0.0",
    "permission": [
      {
        "name": "read::elements"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": ":elementId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.modelType",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>0 = deleted, 1 = enabled</p>"
          },
          {
            "group": "Response: 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>(MongoDB Data Format)</p>"
          },
          {
            "group": "Response: 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>(MongoDB Data Format)</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  success: true,\n  data : \n      {\n          \"_id\": \"3123123213\",\n          \"name\": \"User\",\n          \"modelType\": \"category\",\n          \"status\" : 1,\n          \"createdAt\": \"2019-05-23T17:00:08.200Z\",\n          \"updatedAt\": \"2019-05-23T17:00:08.200Z\",   \n      }\n  }",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/element.type.routes.js",
    "groupTitle": "ElementType"
  },
  {
    "type": "post",
    "url": "/element/create",
    "title": "Create Element Type",
    "name": "createElement",
    "group": "ElementType",
    "version": "1.0.0",
    "description": "<p>Create Element Type</p>",
    "permission": [
      {
        "name": "create::elements"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "json": [
          {
            "group": "json",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "json",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>ModelType</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true\n    id : \"hasdasdas\",\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 3,\n    error : \"Error to create new Element ...\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/element.type.routes.js",
    "groupTitle": "ElementType"
  },
  {
    "type": "patch",
    "url": "/element/update/:elementId",
    "title": "Update Element",
    "name": "updateElement",
    "group": "ElementType",
    "version": "1.0.0",
    "description": "<p>Update Element Name</p>",
    "permission": [
      {
        "name": "update::elements"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": ":elementId",
            "description": "<p>(required)</p>"
          }
        ],
        "json": [
          {
            "group": "json",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true\n    data { id : \"hasdasdas\" }\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 6,\n    error : \"Element not found\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/element.type.routes.js",
    "groupTitle": "ElementType"
  },
  {
    "type": "post",
    "url": "/push/subscribe",
    "title": "Push Subscribe",
    "name": "PushSubscribe",
    "group": "Push",
    "version": "1.0.0",
    "description": "<p>Check web-push documentation for more detail</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subscription",
            "description": "<p>JSON string generated by ServiceWorker converted with urlBase64ToUint8Array</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success : true\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/push.routes.js",
    "groupTitle": "Push"
  },
  {
    "type": "get",
    "url": "/health",
    "title": "To check if API is Online and running",
    "name": "Health",
    "group": "Status",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>returns true if everything is ok</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/routes.js",
    "groupTitle": "Status"
  },
  {
    "type": "post",
    "url": "/user/changepass",
    "title": "Change Pass",
    "name": "ChangePass",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Change the password only for the logged User</p>",
    "permission": [
      {
        "name": "update::self:user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "json": [
          {
            "group": "json",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>New password</p>"
          },
          {
            "group": "json",
            "type": "String",
            "optional": false,
            "field": "oldtoken",
            "description": "<p>Old Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true,\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 1,\n    error : \"Old password not match\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/changepass/:userId",
    "title": "Change Pass By User",
    "name": "ChangePassByUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Change the password for the selected user</p>",
    "permission": [
      {
        "name": "update::user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": ""
          }
        ],
        "json": [
          {
            "group": "json",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>New password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true,\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    success : false,\n    errorNum : 1,\n    error : \"Old password not match\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/updaterole/:userId",
    "title": "Change Role By User",
    "name": "ChangeRoleByUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Change the role of the user indicated by ID</p>",
    "permission": [
      {
        "name": "update::users:role"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": ""
          }
        ],
        "json": [
          {
            "group": "json",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Permission <code>admin</code>,<code>editor</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true,\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 10,\n    error : \"User not found\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/delete/:userId",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "delete::users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": ":userId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  success: true\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/list",
    "title": "List All Users",
    "name": "ListAllUsers",
    "group": "User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "read::users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>(Use to search a specific user or list users that the name start with xxx)</p>"
          },
          {
            "group": "query",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>(max 500)</p>"
          },
          {
            "group": "query",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(skip)</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p><code>asc</code> or <code>desc</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Array</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>0 = disabled, 1 = enabled, 2 = deleted</p>"
          },
          {
            "group": "Response: 200",
            "type": "DateTime",
            "optional": false,
            "field": "user.createdAt",
            "description": "<p>(MongoDB Data Format)</p>"
          },
          {
            "group": "Response: 200",
            "type": "DateTime",
            "optional": false,
            "field": "user.updatedAt",
            "description": "<p>(MongoDB Data Format)</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  success: true,\n  data: \n      [{\n          \"_id\": \"3123123213\",\n          \"name\": \"User\",\n          \"email\": \"user@base.com\",\n          \"username\": \"user123\",\n          \"status\" : 1,\n          \"createdAt\": \"2019-05-23T17:00:08.200Z\",\n          \"updatedAt\": \"2019-05-23T17:00:08.200Z\",   \n      }]\n  }",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/view/:userId",
    "title": "View User",
    "name": "ViewUser",
    "group": "User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "read::users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": ":userId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>0 = disabled, 1 = enabled, 2 = deleted</p>"
          },
          {
            "group": "Response: 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>(MongoDB Data Format)</p>"
          },
          {
            "group": "Response: 200",
            "type": "DateTime",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>(MongoDB Data Format)</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  success: true,\n  data : \n      {\n          \"_id\": \"3123123213\",\n          \"name\": \"User\",\n          \"email\": \"user@base.com\",\n          \"username\": \"user123\",\n          \"status\" : 1,\n          \"createdAt\": \"2019-05-23T17:00:08.200Z\",\n          \"updatedAt\": \"2019-05-23T17:00:08.200Z\",   \n      }\n  }",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/create",
    "title": "Create User",
    "name": "createUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Create users</p>",
    "permission": [
      {
        "name": "create::users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Login Type <code>local-login</code>,<code>google</code>,<code>facebook</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Permission Group <code>admin</code>,<code>editor</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true\n    id : \"hasdasdas\",\n    hash : \"12312asdasd123\"\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 3,\n    error : \"Error to create new User\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/user/update/:userId",
    "title": "Update User",
    "name": "updateUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Update users. At least one parameter needs to be sended</p>",
    "permission": [
      {
        "name": "update::users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": ":userId",
            "description": "<p>(required)</p>"
          }
        ],
        "json": [
          {
            "group": "json",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>optional</p>"
          },
          {
            "group": "json",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>optional (unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : true\n    data { id : \"hasdasdas\" }\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 6,\n    error : \"user not found\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/user.routes.js",
    "groupTitle": "User"
  }
] });
