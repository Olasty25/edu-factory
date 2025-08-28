 # Quiz: Całki Nieoznaczone Ćwiczenia

1. Co otrzymamy po obliczeniu całki $\int x^2 dx$?
A) 0
B) 1
C) $x^2$
D) $x^3/3 + C$

Correct answer: D) $x^3/3 + C$

2. Co oznacza $C$ w wyniku całkowania $(\int x^2 dx = x^3/3 + C)$?
A) Constansa
B) Ciągiem
C) Całką
D) Coś losowego

Correct answer: A) Constansa

3. Całką nieoznaczoną $\int f(x) dx$ nazywamy:
A) Antysymetryczną funkcję
B) Funkcję odwrotną od funkcji $f(x)$
C) Przybliżenie wartości funkcji $f(x)$
D) Dowolną funkcję $F(x)$ taki, że $F'(x) = f(x)$

Correct answer: D) Dowolną funkcję $F(x)$ taki, że $F'(x) = f(x)$

4. Co otrzymamy po obliczeniu całki $\int \sin(x) dx$?
A) $-\cos(x)$
B) $\cos(x)$
C) $-\sin(x)$
D) $\sin(x)$

Correct answer: A) $-\cos(x)$

5. Jaka to własność całek nieoznaczonych? $\int (f(x) + g(x)) dx =$
A) $\int f(x) dx + \int g(x) dx$
B) $\int f(x) dx - \int g(x) dx$
C) $\int f(x) g(x) dx$
D) $\int f(x) / \int g(x) dx$

Correct answer: A) $\int f(x) dx + \int g(x) dx$

# Fiszki: Całki Nieoznaczone Ćwiczenia

1. Całka nieoznaczona
2. Przyrost funkcji
3. Koniunktywność całek
4. Funkcje pętli
5. Pochodna funkcji

# Notatki: Całki Nieoznaczone Ćwiczenia

## Zapis całek nieoznaczonych
- Całki nieoznaczone zapisujemy symbolem $\int f(x) dx$
- Symbol $\int$ wskazuje, że jest to całka
- $f(x)$ jest to funkcja całkowana
- $dx$ oznacza, że całkujemy ze względu na $x$

## Interpretacja całek nieoznaczonych
Całka nieoznaczona to antysymetryczna funkcja $F(x)$ taką, że dla dowolnej wartości $x$ i jej przyrostu $\Delta x$, różnica całek $F(x + \Delta x) - F(x)$ jest przyblżeniem wartości funkcji $f(x)$, nilpotencjalnie zapisywanego jako:
$$
\int f(x) dx = F(x) \Rightarrow \Delta F = F(x + \Delta x) - F(x) \approx f(x) \Delta x
$$
Np. dla $f(x) = x^2$ i $F(x) = x^3/3$
$$
\Delta F \approx (x+\Delta x)^3/3 - x^3/3 = (x^3 + 3x^2\Delta x + 3x(\Delta x)^2 + (\Delta x)^3)/3 - x^3/3
$$
$$
\approx 3x^2\Delta x/3 = x^2\Delta x
$$

## Własności całek nieoznaczonych
1. Liniowość całek $\int (af(x) + bg(x)) dx = a \int f(x) dx + b \int g(x) dx$
2. Dowolna całka nieoznaczona jest wyznaczona z dokładnością do stałej aka (dla dowolnych $F(x), G(x)$, jeśli $\int f(x) dx = F(x)$, to $\int f(x) dx = F(x) + C$)
3. Przyrost funkcji całkowanej za pomocą całki jest przyrostem funkcji zmiennej omówione w punkcie wyżej
4. Addytywność całek $\int (f(x) + g(x)) dx = \int f(x) dx + \int g(x) dx$