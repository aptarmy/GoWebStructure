package common

import (
	"net/http"
	"pkg/datastruct"
	"pkg/tmp"
)

func Index(rw http.ResponseWriter, req *http.Request) {
	var Web datastruct.Web
	Web.Header.Title = "Welcome to GoLang Website"
	Web.Section.Title = "Welcome to GoLang Website"
	Web.Section.Content = `Credit by Mr. Pakpoom Tiwarkornkit`
	tmp.Create(rw, "tmp_1", Web)
}
