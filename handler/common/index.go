package common

import (
	"net/http"
	"pkg/datastruct"
	"text/template"
)

func Index(rw http.ResponseWriter, req *http.Request) {
	FullData := datastruct.GetData()

	FullData.Web.Head.Title = "Index Page"

	FullData.Web.Header.Title = "Welcome To Pta DataStore"
	FullData.Web.Section.Title = "Welcome To Pta DataStore"
	FullData.Web.Section.Content = "asjdlkasjdlkajsdlkajsldkasjdlkasjdlkasjdlaskdjlkasdjlaksdasdlkj"

	var tmplt *template.Template
	tmplt = template.Must(template.ParseGlob("tmplt/*"))
	tmplt.ExecuteTemplate(rw, "tmplt_1", FullData.Web)
}
