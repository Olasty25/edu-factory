 # Quiz - Macierze Obliczenia Podstawowe
1. Jakie jest najprostsze zastosowanie macierzy w powszechnym obliczeniu?
   A. Rozwiązywanie układów równań liniowych
   B. Przesyłanie danych pomiędzy procesorami
   C. Grafika komputerowa
   D. Szyfrowanie wiadomości
   &nbsp;
   Poprawna odpowiedź: A

2. Co reprezentuje element macierzy A o indeksach (i,j)?
   A. Wartość z i-tej kolumny
   B. Wartość z j-tej wiersza
   C. Suma wartości z i-tej kolumny i j-tej wiersza
   D. Iloczyn wartości z i-tej kolumny i j-tej wiersza
   &nbsp;
   Poprawna odpowiedź: D

3. Jaka jest wartość wyznacznika macierzy diagonalnej o elementach a11, a22, a33?
   A. a11 + a22 + a33
   B. a11 * a22 * a33
   C. a11 - a22 - a33
   D. a11 + a22 - a33
   &nbsp;
   Poprawna odpowiedź: B

4. Co oznacza niewaga macierzy kwadratowej?
   A. Macierz, której wyznacznik jest równy 0
   B. Macierz o rzędzie mniejszym niż stopień
   C. Macierz o wszystkich elementach równych 0
   D. Macierz niesymetryczna
   &nbsp;
   Poprawna odpowiedź: A

5. Jaka jest postać macierzy odwrotnej A^-1 dla danej, nieosobliwej macierzy A?
   A. Macierz symetryczna
   B. Macierz diagonalna
   C. Macierz o determinancie równej 1
   D. Macierz o elementsach równych 1/a_ij, gdzie a_ij to element macierzy A
   &nbsp;
   Poprawna odpowiedź: D

# Fiszki - Macierze Obliczenia Podstawowe

1. Macierz kwadratowa
   - Macierz, która ma tyle wierszy co kolumn
   - Wymiar przedstawiamy za pomocą n^2, gdzie n to liczba wierszy

2. Macierz diagonalna
   - Macierz, której wyłącznie elementami poza główną przekątną są zera
   - Wartości poza główną przekątną nie mają wpływu na większość obliczeń

3. Wyznacznik
   - Liczba będąca iloczynem elementów głównej przekątnej (np. a11, a22, a33, ...)
   - Wskazuje, czy macierz jest osobliwa (niewaga)

4. Obliczenia macierzowe
   - Niewaga -> Nie można rozwiązać układu równań, przy czym musi być co najmniej tyle równań, co niewiadomych
   - Odwrotność -> Macierz, której iloczyn z oryginalną daje jednostkową macierz

5. Rozkład Lu-Choleskey'a
   - Metoda rozkładu macierzy na iloczyn dolnej i górnej trójkątnej macierzy
   - Korzystna zastosowanie w szybkiej rozwiązywaniu układów równań liniowych

# Notatki - Macierze Obliczenia Podstawowe

Macierze to prosty i uniwersalny sposób reprezentowania danych tablicowych. W obliczeniach numerycznych i algorytmach korzystamy głównie z macierzy kwadratowych oraz ich własności.

Najważniejsze właściwości macierzy to: wymiar, elementy głównej przekątnej, wartość wyznacznika i iloczyn skalarny.

Dzięki własnościom, jakie posiadają macierze, możemy łatwo rozwiązywać układy równań liniowych, wykonywać obliczenia geometryczne i statystyczne oraz przeprowadzać transformatacje danych (np. zmiana bazy, kompresja danych...).

Ważnym zagadnieniem w przetwarzaniu macierzowym jest własność odwracalności. Macierz odwracalna to taka macierz, której iloczyn z macierzą odwrotną daje jednostkową macierz. Jednostkowa macierz jest prostym przykładem macierzy odwracalnej.

Rozkład Choleskey'a jest popularną metodą rozkładu macierzy na iloczyn dwóch trójkątnych macierzy. Rozkład ten znajduje zastosowanie w szybkiej rozwiązywaniu układów równań liniowych oraz w szeregu innych obliczeń numerycznych.