 # Quiz - Układ równań macierzowych

1. Jakie jest zastosowanie macierzy w ujęciu algebrycznym?
   A. W reprezentacji grafów
    B. W rozwiązywaniu zdań warunkowych
    C. W rozwiązywaniu układów równań liniowych
    D. W kodowaniu informacji
    **Poprawna odpowiedź: C**

2. Czym jest rozwiązaniem układu równań macierzowych?
    A. Dowolna liczba zastępująca zmienne w równaniach
    B. Zbiór wektorów, które spełniają warunek równości wszystkich równań w układzie
    C. Funkcja wielu zmiennych
    D. Macierz, która jest rozwiązaniem układu
    **Poprawna odpowiedź: B**

3. Kiedy mówimy, że układ równań macierzowych jest wyrazisty?
    A. Kiedy ilość równań jest większa od ilości zmiennych
    B. Kiedy ilość zmiennych jest większa od ilości równań
    C. Kiedy ilość równań jest równa ilości zmiennych
    D. Kiedy istnieje tylko jedno rozwiązanie
    **Poprawna odpowiedź: C**

4. Co oznaczają oznaczenia w następującej notacji macierzowej AX=B?
    A. A oznacza macierz współczynników, X oznacza wektor rozwiązań, a B wektor uzupełniający
    B. A oznacza macierz rozwiązań, X oznacza wektor nieznanych, a B wektor współczynników
    C. A oznacza macierz nieznanych, X oznacza wektor rozwiązań, a B wektor współczynników
    D. A oznacza wektor współczynników, X oznacza macierz rozwiązań, a B wektor uzupełniający
    **Poprawna odpowiedź: A**

5. Jaka jest podstawowa zaleta rozwiązywania układów równań macierzowych?
    A. Możliwość wykorzystania algorytmów iteracyjnych
    B. Prosta i szybka implementacja
    C. Możliwość jednoznacznego rozwiązania dla wyrazistych układów
    D. Dostępność rozwiązań dla rozmaitych typów macierzy
    **Poprawna odpowiedź: C**

# Fiszki - Układ równań macierzowych

1. Elementy macierzy A: $a\_{ij}$ (gdzie i oznacza wiersz, a j kolumnę)
2. Reguła Cramera - metoda rozwiązywania układów równań macierzowych na podstawie wyznaczników
3. Metoda eliminacjiGaussa - metoda rozwiązywania układów równań macierzowych za pomocą podstawień w przód i wstecz
4. Wyrazistość układu równań macierzowych - ilość równań jest równa ilości zmiennych
5. Macierz rozwiązań - macierz, w której wiersze są rozwiązaniami poszczególnych równań

# Notatki - Układ równań macierzowych

Układy równań macierzowych to zbiór wielu równań liniowych z tą samą ilością zmiennych. Rozwiązaniem takiego układu jest wektor, który spełnia warunek równości wszystkich równań w układzie. Przykładem takiego układu może być:

$$
\begin{cases} 2x + 3y = 12
3x - 2y = 5 \end{cases}
$$

Układ taki można zapisać za pomocą notacji macierzowej:

$$
\begin{bmatrix} 2 & 3 \\ 3 & -2 \end{bmatrix} \cdot \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 12 \\ 5 \end{bmatrix}
$$

Macierz współczynników mieści w sobie wszystkie współczynniki występujące w równaniach, natomiast wektor rozwiązań – wszystkie zmienne (nieznane).

Podstawowe metody rozwiązywania takich układów to metoda eliminacji Gaussa i reguła Cramera. Pierwsza z nich opiera się na podstawianiu w przód i wstecz, druga zaś - na obliczaniu wyznaczników.

Ważne jest, aby pomóc rozwiązać układ równań macierzowych, był on wyrazisty, czyli ilość równań musiała być równa ilości zmiennych. W przeciwnym wypadku rozwiązanie byłoby niewystarczająco określone.