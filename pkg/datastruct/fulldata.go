package datastruct

type FullData struct {
	Db  Database
	Web Web
}

type Database struct {
	Person Person
}
type Person struct {
	Fname    string
	Lname    string
	Location string
}

type Web struct {
	Head    Head
	Header  Header
	Section Section
}
type Head struct {
	Title string
	Inc   string
}
type Header struct {
	Title    string
	Descript string
}
type Section struct {
	Title   string
	Content string
}

func GetData() FullData {
	return FullData{}
}
