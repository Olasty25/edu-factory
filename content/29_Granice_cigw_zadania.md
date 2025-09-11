 # Quiz - Granice ciągów
1. Co otrzymamy po podstawieniu nieskończonej ilości przyróstków $h$ do wzoru $\frac{(a+h)^2 - a^2}{h}$?
A) $2a$
B) $0$
C) $\infty$
D) Nie da się określić
**Poprawna odpowiedź:** A) $2a$

2. Czy wartość graniczna $\lim\_{n \to \infty} \frac{n^2 + 3n - 5}{n^2 + 1}$ istnieje?
A) Tak
B) Nie
**Poprawna odpowiedź:** A) Tak

3. Oblicz granicę: $\lim\_{n \to \infty} \Big(\frac{n+1}{n-1}\Big)^n$
A) $e$
B) $-e$
C) $1$
D) Nie istnieje
**Poprawna odpowiedź:** A) $e$

4. Co dostaniemy po podstawieniu wartości $x = 0$ do granicy $\lim\_{x \to 0} \frac{\sin x}{x}$?
A) $1$
B) $0$
C) $\infty$
D) Nie da się określić
**Poprawna odpowiedź:** A) $1$

5. Czy następująca własność jest prawdziwa? Jeżeli $\lim\_{n \to \infty} a\_n = a$, to $\lim\_{n \to \infty} \frac{a\_n}{n} = 0$
A) Tak
B) Nie
**Poprawna odpowiedź:** B) Nie

# Fiszki - Granice ciągów
1. **Definicja granicy ciągu**: Direktorem oznaczamy granicę ciągu $\{a\_n\}$ zborem liczbowym $A$ jeśli każdy otoczenie $U$ punktu $A$ zawiera wszystkie wyrazów $\{a\_n\}$, z wyjątkiem z pewną skończoną liczbę wyrazów, tzn.:
$$\forall U(A) \ \exists N \in \mathbb{N} \ \forall n \geq N \ a\_n \in U(A)$$
2. **Kryterium Heinego**: Jeśli dla dowolnego ciągu $\{x\_n\} \subset X$ przy $x\_n \to x\_0$ zachodzi $\lim\_{n \to \infty} a\_{x\_n} = A$, to $\lim\_{x \to x\_0} a\_x = A$.
3. **Twierdzenie o trzech ciągach**: Jeśli $\{a\_n\}$ oraz $\{b\_n\}$ są zbieżne do $a$ i $b$ odpowiednio, a $\alpha, \beta \in \mathbb{R}$, to:
   a) $\lim\_{n \to \infty} (\alpha a\_n + \beta b\_n) = \alpha a + \beta b$
   b) $\lim\_{n \to \infty} a\_n b\_n = ab$
   c) Jeśli $b\_n \neq 0$ oraz $b \neq 0$, to $\lim\_{n \to \infty} \frac{a\_n}{b\_n} = \frac{a}{b}$
4. **Warunek wystarczający zbieżności potęgowej** dla $\{a\_n\}$ ciągu zdefiniowanego przez $a\_n = b\_1 b\_2 \cdot ... \cdot b\_n$: Jeśli $\forall\_n \ b\_n \in [1, +\infty)$ oraz $\sum\_{n=1}^{\infty} |b\_n - 1| < +\infty$, to $\{a\_n\}$ jest zbieżny do pewnej liczby dodatniej.
5. **Zasada Tychoń braju**: Jeśli $\{a\_n\}$ jest ciągiem ograniczonym i każdy jego podciąg ma granicę, to także $\{a\_n\}$ ma granicę.

# Notatki - Granice ciągów
Granice ciągów są jednym z podstawowych pojęć analizy matematycznej i bada się je za pomocą kilku fundamentalnych twierdzeń. Wśród nich wskażemy kryterium zbieżności bólzana, kryterium Cauchy'ego, kryterium Heinego oraz twierdzenia o trzech ciągach. W przypadku badania ciągów związanych ze szeregami, możemy stosować twierdzenie Abela i kryterium D'Alemberta.

Granice funkcji i ciągów są powiązane. Zasadniczo mówiąc, granica ciągu to pojęcie specjalne granicy funkcji, w której miejsce zmiennej $x$ w funkcji zajmuje $n$-ty wyraz ciągu. Więc również często wykorzystujemy metody analizy funkcjonalnej do badania granic ciągów, jak np. twierdzenie Weierstrassa.

Podobne zagadnienia pojawiają się m.in. w analizie numerycznej albo informatyce, szczególnie przy implementacji algorytmów, w których należy ustalać dokładność działań, dzięki której uzyskujemy satysfakcjonujące wyniki.

Ważnym zagadnieniem związanym z granicami ciągów są własności ich zbieżności. Zapoznajmy się na przykład z poniższymi zasadami:

* Monotoniczność: jeśli ciąg $\{a\_n\}$ jest monotoniczny, to jest on zbieżny wtedy i tylko wtedy, gdy jest ograniczony.
* Zasada Tychoń brzuja: jeśli $\{a\_n\}$ jest ciągiem ograniczonym i każdy jego podciąg ma granicę, to także $\{a\_n\}$ ma granicę (to kryterium nieuwzględnione w powyższych fiszkach).
* Teorema o granicy jednostajnej: granica ciągu funkcji jest równa jednostajnie granicy ciągu funkcji wszędzie na zbiorze.
* Twierdzenie Weierstrassa: jeśli granica ciągu $\{a\_n\}$ ograniczonego ciągu liczb rzeczywistych istnieje, to granica ta jest równa pewnej z niniejszego ciągu.

Samodzielne ćwiczenie w obliczaniu granic ciągów i szeregów rozwija umiejętności pracy z takimi pojęciami, jak limit liczbowy, otoczeniem, ciągami monotonicznymi oraz metodami szeregów.