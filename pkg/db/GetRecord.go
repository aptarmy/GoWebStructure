package db

import (
	"appengine"
	"appengine/datastore"
	"net/http"
	"strconv"
)

func GetRecordByKeyID(req *http.Request, kind string, keyStr string, prtKey *datastore.Key, record interface{}) {
	if keyStr == "" || kind == "" {
		return
	}

	keyID, _ := strconv.ParseInt(keyStr, 10, 64)
	c := appengine.NewContext(req)
	key := datastore.NewKey(c, kind, "", keyID, prtKey)
	datastore.Get(c, key, record)
}
