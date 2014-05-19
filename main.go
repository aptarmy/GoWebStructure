package main

import (
	"handler/common"
	"net/http"
)

func init() {
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("files/css"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("files/js"))))
	http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("files/img"))))
	http.Handle("/fonts/", http.StripPrefix("/fonts/", http.FileServer(http.Dir("files/fonts"))))

	http.HandleFunc("/", common.Index)
}
