# 📚 책 추천 커뮤니티 <와르르>


### *알라딘 API 사용법
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
