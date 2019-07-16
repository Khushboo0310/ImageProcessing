package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strings"

	"github.com/kataras/iris"
)

func main() {
	app := iris.New()

	app.StaticWeb("/", "./static")

	crs := func(ctx iris.Context) {
		ctx.Header("Access-Control-Allow-Origin", "*")
		ctx.Header("Access-Control-Allow-Credentials", "true")
		ctx.Header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Content-Type")
		ctx.Next()
	}
	app.Use(crs)

	app.AllowMethods(iris.MethodOptions)

	// Method:   GET
	// Resource: http://localhost:8080
	// app.Get("/", func(ctx iris.Context) {
	// 	ctx.HTML("<h1>Welcome</h1>")
	// })

	// Method:   GET
	// Resource: http://localhost:8080/plugin/{pname:string}
	app.Get("/plugins/{pname:string}", func(ctx iris.Context) {

		//Parameter
		pname := ctx.Params().GetStringDefault("pname", "failed")
		if strings.Compare(pname, "failed") == 0 {
			fmt.Println("Could not read Parameters in path")
		}

		fmt.Printf("pname : %s\n", pname)

		var anyJSON map[string]interface{}
		var data []byte
		data, _ = ioutil.ReadFile("../plugins.json")

		json.Unmarshal(data, &anyJSON)

		xVal := anyJSON[pname].(interface{})

		mapB, _ := json.Marshal(xVal)
		fmt.Println(string(mapB))
		ctx.WriteString(string(mapB))
		//ctx.JSON(iris.Map{"message": "Hello Iris!"})
	})

	// Method:   GET
	// Resource: http://localhost:8080/executePlugin
	app.Get("/executePlugin", func(ctx iris.Context) {

		var anyJSON map[string]interface{}
		var data []byte
		data, _ = ioutil.ReadFile("../data.json")

		json.Unmarshal(data, &anyJSON)

		xVal := anyJSON["results"].(interface{})

		mapB, _ := json.Marshal(xVal)
		ctx.WriteString(string(mapB))
	})

	// http://localhost:5000
	app.Run(iris.Addr(":5000"), iris.WithoutServerError(iris.ErrServerClosed))
}
