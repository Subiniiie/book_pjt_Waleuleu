# 📚 책 추천 커뮤니티 <와르르>


### * 알라딘 API 사용법
```
axios({
      method: 'get',
      url: `https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemList.aspx?`,
      params: {
          ttbkey: API_KEY,
          QueryType: 'ItemNewAll',
          MaxResults: 50,
          start: 1,
          SearchTarget: 'Book',
          output: 'js',
          Version: '20131101'
        } 
    })
```
1. https://cors-anywhere.herokuapp.com/corsdemo 에서 `Request temporary access to the demo server` 클릭
2. Vue 실행


### 😡애로사항
1. 최신도서, 베스트셀러, 작가 검색에서 첫 페이지가 자동으로 안 나타남
2. 작가 검색에서 작가를 검색했을 때, '찾으시는 작가가 없습니다.'가 나온 후 검색 결과가 나옴