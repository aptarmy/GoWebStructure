package datastruct

type Web struct {
	Head    Head
	Header  Header
	Section Section
	Other   map[string]string
}
type Head struct {
	Title   string
	Inc     string
	IncFile string
}
type Header struct {
	Title    string
	Descript string
}
type Section struct {
	Title   string
	Content string
}

type Db struct {
	Audio Audio
}
type Audio struct {
	ID      int64
	AudName string
	AudDsc  string
	BlobKey string
}
