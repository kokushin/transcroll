# transcroll
Achieve a smooth scrolling using CSS Transitions.

CSS3の力を借りてぬるぬるスクロールを実現するよ！

## デモ
http://kokushin.github.io/transcroll/

## 使い方
全体を囲った要素に対して実行！
```
$('element').transcroll();
```

## オプション
まだスピードくらいしか変えれないよ！

#### イージング
```
easing: 数値　
```
初期値は `0.05` だよ！

#### パララックス
申し訳程度の視差効果が楽しめます。
```
parallax: 'element'
```
初期値は `.parallax` だよ！

#### パララックスのイージング
```
parallaxEasing: 数値
```
初期値は `0.5` だよ！

## ライセンス
自由に使ってね！
