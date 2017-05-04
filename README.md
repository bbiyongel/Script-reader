# Script-reader
네이버 음성 합성 API를 이용한 스크립트 리더기  

### 소개  

이 웹 페이지는 [네이버 음성 합성 API](https://developers.naver.com/docs/labs/tts/)를 사용하여, 키보드 입력한 문장을 음성으로 생성해줍니다.  

***

### 개발환경  

* Server : Node.js, Express.js  
* Client : EJS template  
* Host PC
	* OS : Ubuntu 16.04 LTS  
	* IP : 163.180.142.73  
	* Port : 7000

***

### 사용법

1. 본 리파지토리를 클론한다. (* 터미널에서 실행)  

```
git clone https://github.com/sauber92/Script-reader.git  
cd Script-reader  
```

<br/>
2. 네이버 API를 등록한다.  

참고 링크 : [네이버 개발자 센터 > 애플리케이션 등록](https://developers.naver.com/apps/#/register?defaultScope=tts) (* 네이버 로그인 필요)  

<br/>
3. Script-reader 디렉토리 안에 *config/password.js* 파일을 만든다. (* 터미널에서 실행)  

```
(현재경로 : ~/Script-reader)  
mkdir config  
vi config/password.js  
```

<br/>
4. password.js에 네이버 Client ID와 Client Secret ID를 다음과 같이 넣어준다.  
(* Client ID, Client Secret ID는 [여기](https://developers.naver.com/docs/common/register/)를 참고하면 된다.)  

```js
// password.js
module.exports = {
  client_id : '네이버 Client ID',
  client_secret : '네이버 Client Secret ID'
}

```  

<br/>
5. Script-reader 디렉토리에서 npm install을 통해 모듈을 설치하고 실행한다. (* 터미널에서 실행)  

```  
(현재경로 : ~/Script-reader)  
npm install  
npm start  
```  

<br/>
6. 웹 브라우져에서 확인을 한다.  

URL : http://localhost:7000  

***

### 개발자  

* 정준영(@sauber92)  
* Github : https://github.com/sauber92  
* Mail : jjy920517@gmail.com  
* Blog : https://sauber92.github.io  

***

### License  

[MIT License](https://github.com/sauber92/Script-reader/blob/master/LICENSE)