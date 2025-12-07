# Quiz

1. Co to jest ciąg geometryczny?
   - A. Ciąg, w którym iloraz każdych dwóch sąsiednich wyrazów jest stały.
   - B. Ciąg, w którym suma wyrazów jest stała.
   - C. Ciąg, w którym iloczyn wyrazów jest stały.
   - D. Ciąg, w którym różnica wyrazów jest stała.

   Poprawna odpowiedź: A

2. Jak wyliczyć sumę n wyrazów ciągu geometrycznego?
   - A. $(a\_1 \* a\_n) / 2$
   - B. $(n \* a\_1) / 2$
   - C. $(a\_1 - a\_n) \* n / 2$
   - D. $(a\_1 \* a\_n) \* n / 2$

   Poprawna odpowiedź: A, jeśli $a\_1 \neq 0$ i $a\_n \neq 0$

3. Czy prawdziwa jest tożsamość $\sum\_{i=1}^n ar^i = a\frac{1-r^n}{1-r}$?
   - A. Tak, jeśli $r \neq 1$
   - B. Tak, jeśli $r = 1$
   - C. Nie, jeśli $r \neq 1$
   - D. Nie, jeśli $r = 1$

   Poprawna odpowiedź: A, jeśli $r \neq 1$ i $a \neq 0$

4. Jak wyliczyć sumę $5 + 10 + 20 + \dots + 640$?
   - A. $\frac{5(2^{10}-1)}{2-1}$
   - B. $\frac{5(2^{10}+1)}{2+1}$
   - C. $\frac{5(1-2^{10})}{1-2}$
   - D. $\frac{5(1+2^{10})}{1+2}$

   Poprawna odpowiedź: A

5. Czy prawdziwa jest tożsamość $\sum\_{i=1}^n ir^i = r\frac{d}{dr}\sum\_{i=1}^n r^i$?
   - A. Tak
   - B. Nie

   Poprawna odpowiedź: A

# Fiszki

1. **Ciąg geometryczny** - kolejne wyrazy $a\_1, a\_2, a\_3, \dots$ są związane wzorem $a\_n = a\_{n-1} \* r$, gdzie $a\_1$ to **pierwszy wyraz**, a $r$ to **iloraz**.
2. **Suma n wyrazów ciągu geometrycznego** - wyraża się wzorem $\sum\_{i=1}^n ar^{i-1} = a\frac{1-r^n}{1-r}$, gdzie $a$ to **pierwszy wyraz**, $r$ to **iloraz**, a $n$ to **liczba wyrazów**.
3. **Suma n wyrazów ciągu geometrycznego (alternatywny wzór)** - wyraża się wzorem $\sum\_{i=1}^n ar^{i-1} = \frac{a(r^n-1)}{r-1}$, gdzie $a$ to **pierwszy wyraz**, $r$ to **iloraz**, a $n$ to **liczba wyrazów**.
4. **Suma n wyrazów ciągu geometrycznego (wzór potęgowy)** - wyraża się wzorem $\sum\_{i=1}^n ar^{i-1} = a + ar + ar^2 + \dots + ar^{n-1} = a(1 + r + r^2 + \dots + r^{n-1}) = a\frac{r^n-1}{r-1}$, gdzie $a$ to **pierwszy wyraz**, $r$ to **iloraz**, a $n$ to **liczba wyrazów**.
5. **Suma n wyrazów ciągu geometrycznego (wzór z różnicą skończoną)** - wyraża się wzorem $\sum\_{i=1}^n ir^i = r\frac{d}{dr}\sum\_{i=1}^n r^i$, gdzie $\sum\_{i=1}^n r^i = \frac{r^{n+1}-r}{r-1}$ dla $r \neq 1$.

# Notatki

Ciąg geometryczny to ciąg, w którym iloraz każdych dwóch sąsiednich wyrazów jest stały. Można go zapisać jako $a\_1, a\_2, a\_3, \dots$, gdzie $a\_n = a\_{n-1} \* r$ dla $n > 1$. W tym wzorze $a\_1$ to **pierwszy wyraz**, a $r$ to **iloraz**.

Aby obliczyć sumę $n$ wyrazów ciągu geometrycznego, można skorzystać z wzoru $\sum\_{i=1}^n ar^{i-1} = a\frac{1-r^n}{1-r}$, gdzie $a$ to **pierwszy wyraz**, $r$ to **iloraz**, a $n$ to **liczba wyrazów**. Jeśli $r = 1$, to wówczas $\sum\_{i=1}^n a = na$.

Wzór na sumę $n$ wyrazów ciągu geometrycznego można zapisać też w postaci $\sum\_{i=1}^n ar^{i-1} = \frac{a(r^n-1)}{r-1}$, gdzie $a$ to **pierwszy wyraz**, $r$ to **iloraz**, a $n$ to **liczba wyrazów**.

W szczególnych przypadkach można skorzystać z wzoru potęgowego $\sum\_{i=1}^n ar^{i-1} = a + ar + ar^2 + \dots + ar^{n-1} = a(1 + r + r^2 + \dots + r^{n-1}) = a\frac{r^n-1}{r-1}$, gdzie $a$ to **pierwszy wyraz**, $r$ to **iloraz**, a $n$ to **liczba wyrazów**.

Jeśli chcemy obliczyć sumę $\sum\_{i=1}^n ir^i$, to możemy skorzystać z wzoru $\sum\_{i=1}^n ir^i = r\frac{d}{dr}\sum\_{i=1}^n r^i$, gdzie $\sum\_{i=1}^n r^i = \frac{r^{n+1}-r}{r-1}$ dla $r \neq 1$.