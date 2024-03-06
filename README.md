# Cvičení: Kalendář

Kurz Základy TypeScriptu

Datové modely v praxi si procvičíme na tvorbě aplikace zobrazující jednoduchý kalendář. Aplikace bude umět zobrazit aktuální týden, v němž budou zaznamenány dva typy položek: události a úkoly. Události budeme zobrazovat modrou barvou, úkoly bílou. Každá položka bude mít název a časový údaj, kdy má nastat.


![Ukázka možného výsledku](https://kodim.cz/cms/assets/kurzy/zaklady-ts/lekce/rozlisovani/cviceni/calendar.png)


## 1. Seznámení s projektem
Nejprve založíme a rozchodíme výchozí projekt pro aplikaci kalendář. Postupujte podle následujících kroků:

1. Vytvořte si repozitář z [připravené šablony](https://github.com/kodim-vyuka/cviceni-kalendar-zadani). Naklonujte si jej k sobě na disk a otevřete v editoru VS Code.
2. V terminálu spusťte příkaz `tsc -watch` pro spuštění překladu TypeScriptu v režimu watch. Jak už jistě víte, tento příkaz sleduje změny ve vašem kódu a automaticky je překládá do JavaScriptu.
3. Spusťte základ aplikace pomocí příkazu `npx serve`.
4. Prohlédněte si strukturu HTML, CSS i TypeScriptu. Abychom dokázali zobrazovat jednotlivé položky kalendáře nad mřížkou, používáme trošku CSS magie. Třída `day-column` je zařízená tak, že všechny elementy v ní se zobrazují přes sebe. Tímto způsobem můžeme posouvat jednotlivé položky uvnitř dne tak, že jim nastavíme styl `margin-top`. Zároveň máme v TypeScriptu funkci `renderGrid`, která vykreslí mřížku kalendáře.
5. Výška jedné hodiny v mřížce je chytře nastavena na 60 pixelů, takže každý pixel odpovídá jedné minutě. Takto můžeme jednoduše spočítat, kde se má každá položka zobrazit. Zkuste přímo v souboru `index.html` vytvořit nějakou položku v kalendáři například na čase 8:15.

## 2. Datový model
Vytvoříme TypeScritový datový model pro položky kalendáře.

**Zadání domény**:

Kalendář obsahuje dva druhy položek - události a úkoly. Každá položka má svůj název a časový údaj, kdy má nastat. Události mají navíc údaj o délce trvání. Naopak úkoly mají údaj o tom, zda jsou již splněny.

1. Založte soubor `model.ts`, ve kterém budeme vytvářet datový model.
2. Jelikož budeme pracovat s časem, rozmyslete si, jak budete reprezentovat časový údaj o tom, kdy nějaká položka nastane. Nejlepší bude vytvořit si vlastní datový typ pro časový údaj. Zatím nám jako reprezentace času postačí číslo dne v týdnu, hodiny a minuty.
3. Vytvořte datový model pro položky kalendáře. Vezměte do úvahy, že budeme později potřebovat pole všech položek kalendáře, a budeme chtít poznat, zda je položka událost nebo úkol.
4. Jakmile budete mít datový model hotový, vytvořte pole několika úkolů a událostí v souboru `data.ts`. V další části toto pole zobrazíme na stránce.

## 3. Zobrazení položek kalendáře
Jakmile máme hotový datový model, můžeme se pustit do zobrazení položek kalendáře.

Nejprve se rozhodněte, jakým způsobem budete vytvářet obsah stránky na základě dat. Můžete použít buď *DOM API* a `document.createElement` nebo *templating* a čisté `innerHTML`. Třetí možností by bylo použít nějakou knihovnu, například JSX, ale k tomu se dostaneme až později v lekci o Reactu.

### DOM API
Pomocí DOM API se nový element vytvoří a přidá do stránky takto:

```js
const h1 = document.createElement('h1');
h1.innerHTML = '<span>Hello world!</span>';
h1.classList.add('title');
document.body.appendChild(div);
```

Tímto způsobem funguje funkce `fillGrid`, která vytváří mřížku kalendáře. Pokud tento postup vidíte poprvé v životě, můžete si jej buď lehce nastudovat, nebo se na něj vykašlat a jít cestou `innerHTML`.

### InnerHTML
Pomocí `innerHTML` se nový element přidá takto

```js
const h1 = `<h1 class="title"><span>Hello world!</span></h1>`;
document.body.innerHTML += h1;
```

Ať už si zvolíte jakýkoliv postup, postupujte dle těchto kroků:

1. Vytvořte funkci `renderCalendar`, která jako parametr obdrží pole položek kalendáře a zobrazí je na stránce. Zatím se soustřeďte pouze na to, aby se položky zobrazily ve správném dnu a čase.
2. Zařiďte, aby se úkoly zobrazovaly bílou barvou a události modrou.
3. Událost by měla mít výšku dle svého trvání, úkol by měl být tak vysoký, aby se do něj vešel text.
4. Úkoly, které ještě nejsou splněny, zobrazte přeškrtnuté pomocí třídy `task-done`.

Tímto byste měli mít aplikaci hotovou. Pokud vám tento projekt přišel jako procházka růžovým sadem a toužíte po větší výzvě, můžete se pustit do bonusových úkolů.

## 4. Bonusy
Aplikace s kalendářem se dá rozšířit mnoha různými způsoby. Zde je několik nápadů, jak můžete aplikaci vylepšit:

1. **Více typů položek** - můžete vymyslet více typů událostí a označovat je různými barvami, například pracovní, osobní a rodinné události.
2. **Skutečný čas** - místo vlastního objektu pro časový údaj použijte JavaScriptový `Date`. Pak můžete položky v kalendáři ukotvit na skutečné reálné datum a zobrazit skutečný aktuální týden. Zde by se hodilo v aplikaci zobrazit například aktuální den, o kolikátý týden v roce jde apod.
3. **Označení hotového úkolu** - pokud uživatel klikne na úkol, jeho stav se změní na hotový. Jelikož nejsme v Reactu, po změně dat bude potřeba znova zavolat funkci `renderCalendar` pro překreslení celého kalendáře.
4. **Listování v kalendáři** - pokud umíte celý kalendář překreslit, můžete implementovat přesun na předchozí nebo následující týden. Nebo můžete nechat uživatele pomocí formuláře zadat konkrétní datum, na které se má kalendář přesunout.
5. **Přidání nové položky** - od označování hotových úkolů už je jen krok k přidávání nových položek. Můžete vytvořit formulář, který se zobrazí po kliknutí na den v kalendáři. Uživatel tam vyplní název, čas položky a její typ, a položka se přidá do pole s daty a kalendář se překreslí.