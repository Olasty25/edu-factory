 # Quiz - Równania prostej w przestrzeni

1. Jakie jest równanie prostej w przestrzeni trójwymiarowej zapisane w postaci kanonicznej?
   A. \( x = 0 \)
   B. \( y = 0 \)
   C. \( ax + by + cz = d \)
   D. \( a^2 + b^2 + c^2 = d^2 \)
   <details><summary>Poprawna odpowiedź:</summary> C. \( ax + by + cz = d \) </details><br>

2. Czym różni się wektor normalny od wektora przecinającego prostej w przestrzeni trójwymiarowej?
   A. Wartość
   B. Kierunek
   C. Rozmiar
   D. Wymiar
   <details><summary>Poprawna odpowiedź:</summary> D. Wymiar </details><br>

3. Kilka punktów prostej w przestrzeni trójwymiarowej można zapisać za pomocą:
   A. Równania parametrycznego
   B. Równania kanonicznego
   C. Wektorów promieniowych
   D. Wszystkich powyższych
   <details><summary>Poprawna odpowiedź:</summary> D. Wszystkich powyższych </details><br>

4. Równanie parametryczne prostej o wektorze normalnym \( \vec{n} = [1, 2, 3] \) ma następującą postać:
   A. \( \vec{r} = [x, y, z] + t \cdot [1, 2, 3] \)
   B. \( \vec{r} = [1, 2, 3] + t \cdot [x, y, z] \)
   C. \( \vec{r} = [x, y, z] + t \)
   D. \( \vec{r} = t \cdot [1, 2, 3] \)
   <details><summary>Poprawna odpowiedź:</summary> A. \( \vec{r} = [x, y, z] + t \cdot [1, 2, 3] \) </details><br>

5. Równanie kanoniczne prostej określonej przez punkty \( A(x_A, y_A, z_A) \) i \( B(x_B, y_B, z_B) \) wyraża się wzorem:
   A. \( \frac{x-x_A}{x_B-x_A} = \frac{y-y_A}{y_B-y_A} = \frac{z-z_A}{z_B-z_A} \)
   B. \( \frac{x_A-x}{x_B-x_A} = \frac{y_A-y}{y_B-y_A} = \frac{z_A-z}{z_B-z_A} \)
   C. \( \frac{x-x_A}{x_A-x_B} = \frac{y-y_A}{y_A-y_B} = \frac{z-z_A}{z_A-z_B} \)
   D. \( \frac{x_A-x}{x_A-x_B} = \frac{y_A-y}{y_A-y_B} = \frac{z_A-z}{z_A-z_B} \)
   <details><summary>Poprawna odpowiedź:</summary> A. \( \frac{x-x_A}{x_B-x_A} = \frac{y-y_A}{y_B-y_A} = \frac{z-z_A}{z_B-z_A} \) </details><br>

# Fiszki - Równania prostej w przestrzeni

- Prosta w przestrzeni trójwymiarowej może być opisana za pomocą:
  - równania kanonicznego
  - równania parametrycznego
  - wektorów promieniowych

- Równanie kanoniczne ma postać: \( ax + by + cz = d \)
- Równanie parametryczne prostej określonej przez wektor normalny \( \vec{n} = [a, b, c] \) ma postać: \( \vec{r} = \vec{a} + t \cdot \vec{n} \), gdzie \( \vec{a} \) to wektor położenia punktu prostej

- Dodatkowy warunek na płaszczyznę danej prostej w przestrzeni jest: \( \vec{n} \cdot \vec{n} = ||\vec{n}||^2 \)

# Notatki - Równania prostej w przestrzeni

Równanie prostej w przestrzeni trójwymiarowej może być zapisane za pomocą trzech reprezentacji różniących się stopniem ogólności i zastosowań:

- **Równanie kanoniczne** – jest to postać najbardziej ograniczona, oparta na jednym równaniu liniowym z dwiema zmiennymi wolnymi i jedną zależną:

\( ax + by + cz = d \) gdzie \( a, b, c \in \mathbb{R} \) (liczby rzeczywiste), a \( d \) to stała rzeczywista

- **Równanie parametryczne** – jest to postać uogólniona możliwa do przedstawienia na podstawie dowolnego wektora oraz dodatkowego parametru skalarnego \( t \):

\( \vec{r} = \vec{a} + t \cdot \vec{n} \), gdzie \( \vec{a} \) to wektor położenia punktu prostej, \( \vec{n} \) to wektor normalny, a \( t \) to parametr skalarny ("czas")

- **Wektory promieniowe** – jest to postać całkowicie ogólna, opierająca się na dowolnomu wektorze co najmniej dwóch punktów leżących na prostej oraz różnicy między nimi:

\( \vec{r} = \vec{a} + \lambda \cdot (\vec{b} - \vec{a}) \) gdzie \( \lambda \in \mathbb{R} \) (liczba rzeczywista)

Ogólnie, równania te opisują trójwymiarową przestrzeń współrzędnych, w której każdy punkt jest opisany przez swój unikalny wektor wodzący. Jednak wszystkie trzy przypadki równań prostej pozwalają na ustalenie współrzędnych punktów należących do danej prostej, choć nie zawierają w sobie całości informacji o jej położeniu w przestrzeni. Dodatkowy warunek nakładany na równanie prostej jest to no jego płaszczyzna, zgodnie z prawem iloczynu wektora na siebie:

\( \vec{n} \cdot \vec{n} = ||\vec{n}||^2 \) jest to warunek płaskiej prostej, gdzie \( \vec{n} \) to wektor normalny określający prostą, a symbole \( || ... || \) oznaczają normę wektora.