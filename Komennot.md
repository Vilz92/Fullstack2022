# Uuden React-appiksen luonti

```
npx create-react-app <projektikansion nimi>
```

Index.js:ään asetettava rivi:
```
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

# JSON-serverin asennus & ajo

```
npm install json-server --save-dev
npx json-server --port=3001 --watch db.json
```

Konfiguraatio pika-ajoon:
```
package.json:
"scripts": {
	"server": "json-server -p3001 --watch db.json"
}
```
ajautuu tämän jälkeen komennolla: `npm run server`


# Axioksen asennus

`npm install axios` (aja projektin juuressa)
