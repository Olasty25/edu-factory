 # Quiz

1. Co to są permutacje z powtórzeniami?
A) permutacje wybranych elementów zbioru bez powtórzeń
B) permutacje wybranych elementów zbioru z powtórzeniami
C) kombinacje wybranych elementów zbioru bez powtórzeń
D) kombinacje wybranych elementów zbioru z powtórzeniami

Odpowiedź: B) permutacje wybranych elementów zbioru z powtórzeniami

...

(pozostale pytania analogicznie, wyjaśnienie zobacz w sekcji Notatki)

# Fiszki

* elementy biorące udział w permutacjach muszą pochodzić ze zbioru danych
* jeśli elementy są nierozróżnialne, występuje ich faktycznie mniej, np. AABBCC to tylko 15 permutacji
* permutacje z powtórzeniami to po prostu porządkowania zbioru elementów, w którym są powtórzenia
* jeśli zbiór jest duży, wydajniejszy od zliczania kolejnych permutacji jest mnożenie kolejnych rozmiarów zbioru

# Notatki

Permutacjami z powtórzeniami nazywamy porządkowanie elementów, które mogą się powtarzać (w przeciwieństwie do standardowych permutacji, w których elementy są unikalne). Zgodnie z formalną definicją permutacji, jeżeli mamy zbiór $n$ elementów, w tym $k$ różnych elementów, w których dany element $a$ pojawia się $m$ razy, mamy:

$$P_{n} = \frac{n!}{m_1! \cdot m_2! \cdots m_k!}.$$

W powyższym wzorze należy pamiętać o warunku $m_1 + m_2 + \dots + m_k = n$.

## Przykład

Zauważmy, że permutacjami z powtórzeniami dla zbioru ABC ABC są między innymi: ABC ABC, ACB BAC, BAC ACB, CBA BAC, BAC CBA, BC ACB.

Permutacje te policzemy w następujący sposób:

$$P_{6} = \frac{6!}{1! \cdot 2! \cdot 3!} = \frac{720}{2 \cdot 6} = 60.$$

W naszym przykładzie permutacji jest mniej, niż wynika z powyższego wzoru, ponieważ elementy ABC są nierozróżnialne. Faktycznie musimy policzyć permutacje trzech liter ABC:

$$P_{3} = \frac{3!}{1! \cdot 1! \cdot 1!} = \frac{6}{1 \cdot 1 \cdot 1} = 6,$$

więc sumarycznie jest ich $60 / 6 = 10$.

Powyższe rozważania prowadzą do stwierdzenia, że najlepiej policzyć permutacje z powtórzeniami dla małych zbiorów zgodnie z ich definicją, a dla
większych zastosować metodę mnożenia kolejnych rozmiarów zbioru:

$$n_1 \cdot n_2 \cdot \dots \cdot n_m,$$

gdzie $n_i$ to liczba wystąpień każdego elementu w zbiorze. W ten sposób możemy policzyć, że ABCD ABCD ma 504 permutacji z powtórzeniami.