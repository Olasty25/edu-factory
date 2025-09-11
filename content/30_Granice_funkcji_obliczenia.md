 # Granice funkcji obliczenia

## Quiz

1. Co to jest złożoność czasowa funkcji?
   A. Ilość pamięci potrzebnej do wykonania funkcji
   B. Ilość operacji matematycznych w funkcji
   C. Czas potrzebny do wykonania funkcji
   D. Zależność czasu wykonywania funkcji od wielkości danych wejściowych
   **D. Zależność czasu wykonywania funkcji od wielkości danych wejściowych**

2. Jakie są podstawowe rodzaje złożoności czasowej?
   A. O(1), O(n), O(n^2)
   B. O(log n), O(n), O(n log n)
   C. O(1), O(log n), O(n!)
   D. O(n), O(n^2), O(2^n)
   **B. O(log n), O(n), O(n log n)**

3. Co oznacza notacja dużego O oraz Ω w kontekście złożoności czasowej?
   A. O oznacza górne oszacowanie, Ω – dolne oszacowanie
   B. O oznacza średnie oszacowanie, Ω – maksymalne oszacowanie
   C. O i Ω są takie same
   D. O oznacza dolne oszacowanie, Ω – górne oszacowanie
   **A. O oznacza górne oszacowanie, Ω – dolne oszacowanie**

4. Czym jest stała złożoności czasowej funkcji?
   A. Liczba instrukcji w funkcji
   B. Liczba danych wejściowych
   C. Liczba operacji matematycznych
   D. Liczba bitów informacji potrzebnych do reprezentacji danych wejściowych
   **D. Liczba bitów informacji potrzebnych do reprezentacji danych wejściowych**

5. Dlaczego warto analizować złożoność czasową funkcji?
   A. Aby zmniejszyć ilość pamięci potrzebnej do wykonania funkcji
   B. Aby zwiększyć prędkość wykonywania funkcji
   C. Aby zrozumieć, jak zmienia się czas wykonywania funkcji wraz z rozmiarem danych wejściowych
   D. Aby zmniejszyć ilość instrukcji w funkcji
   **C. Aby zrozumieć, jak zmienia się czas wykonywania funkcji wraz z rozmiarem danych wejściowych**

## Fiszki

- **Złożoność czasowa funkcji**: pomaga zrozumieć, jak zmienia się czas wykonywania funkcji wraz z rozmiarem danych wejściowych.
- **Notacja dużego O**: oznacza górne oszacowanie złożoności czasowej funkcji.
- **Notacja dużego Ω**: oznacza dolne oszacowanie złożoności czasowej funkcji.
- **Stała złożoności czasowej**: liczba bitów informacji potrzebnych do reprezentacji danych wejściowych.
- **Asymptotyczna złożoność**: pomaga uzyskać lepsze wgląd w zachowanie funkcji przy dużych wartościach danych wejściowych.

## Notatki

Złożoność czasowa funkcji jest miarą ilości czasu potrzebnego do wykonania danego zadania wraz ze wzrostem wielkości danych wejściowych. Istotne jest przy tym, aby zrozumieć, jak szybko wzrasta czas wykonywania funkcji przy dużych wartościach danych wejściowych.

Notacja dużego O (O(f(n))) jest notacją asymptotyczną służącą do opisu górnego oszacowania czasu wykonywania danej funkcji. Z drugiej strony, notacja dużego Ω (Ω(f(n))) służy do opisu dolnego oszacowania czasu wykonywania funkcji.

Asymptotyczna złożoność to sposób analizy funkcji, który pomaga zrozumieć, jak się ona zachowuje przy dużych wartościach danych wejściowych. Na ogół przyjmuje się, że większość algorytmów złożonych liniowo (O(n)) lub złożonych logarytmicznie (O(log n)) jest uważana za efektywne. Algorytmy o złożoności wyższej (np. O(n^2), O(n^3), itp.) mogą być znacznie wolniejsze przy dużych danych wejściowych.

Stała złożoności czasowej funkcji to liczba bitów informacji potrzebnych do reprezentacji danych wejściowych. Może ona wpływać na szybkość działania funkcji, szczególnie jeśli jest bardzo duża. Jednak w kontekście złożoności czasowej, wartość stałej złożoności nie jest tak istotna jak asymptotyczna złożoność funkcji.