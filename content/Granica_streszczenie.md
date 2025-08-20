 # Granica Streszczenie

## Quiz

1. Co odróżnia proces kompilacji od wykonywania programu?
   A. Wynik procesu kompilacji jest plikiem wykonywalnym, natomiast wykonywanie programu daje wynik wykonania jego instrukcji.
   B. Proces kompilacji ma miejsce w czasie wykonywania programu, natomiast wykonywanie programu odbywa się przed kompilacją.
   C. Proces kompilacji jest opcjonalny, podczas gdy wykonywanie programu jest wymagane.
   D. Proces kompilacji odbywa się w pamięci, natomiast wykonywanie programu na dysku.

   Poprawna odpowiedź: A

2. Czym jest limit streszczenia?
   A. Procedurą wyznaczania największej możliwej wartości zmiennej.
   B. Jakościowym pojęciem w stosunku do kompilacji i wykonywania programów.
   C. Jednostką pomiaru w systemach operacyjnych do zarządzania pamięcią.
   D. Limitem wydajności systemu zależnym od architectury sprzętowej.

   Poprawna odpowiedź: B

3. Jakie jest znaczenie limitu streszczenia dla kompilacji i wykonywania programów?
   A. W kompilacji decyduje on o możliwościłości utworzenia pliku wykonywalnego, natomiast w trakcie wykonywania o prawidłowym działaniu programu.
   B. Jest on niezależny od kompilacji i wykonywania programów, ponieważ dotyczy tylko pamięci stosu i sterty.
   C. Dla kompilacji nie ma znaczenia, natomiast dla wykonywania programu jest on kluczowy do jego poprawnego działania.
   D. Bez względu na kompilację czy wykonywanie programu, limit streszczenia nie ma wpływu na ich zachowanie.

   Poprawna odpowiedź: A

4. Jak sprawdzić wartość limitu streszczenia w systemie Linux?
   A. Za pomocą narzędzia `ulimit`, które jest częścią interpretera `bash`.
   B. Za pomocą komendy `limit`, która dostępna jest na wszystkich uniksowych systemach operacyjnych.
   C. Za pomocą polecenia `ulimit` wywoływanego z uprawnieniami administratora.
   D. Za pomocą systemowych wywołań interfejsu systemowego (ang. system calls), które są dostępne w kodzie źródłowym języka C.

   Poprawna odpowiedź: A

5. Dlaczego niedostateczne rozumienie limitu streszczenia może prowadzić do problemów z bezpieczeństwem?
   A. Może to prowadzić do przepełnienia bufora, błędów segfaultów oraz możliwej eksploatacji tych błędów przez osoby postronne.
   B. Brak tego rozumienia nie ma wpływu na bezpieczeństwo, ponieważ limit streszczenia nie jest powiązany z ochroną pamięci.
   C. Problem pojawia się tylko w przypadku kompilacji programów, a w trakcie ich wykonywania nie ma ryzyka.
   D. Znajomość limitu streszczenia zmniejsza ryzyko

   Poprawna odpowiedź: A

## Fiszki

* Kompilacja to konwersja kodu źródłowego w postaci napisaną przez człowieka w języku programowania w plik wykonywalny, który może być od razu wykonany przez system operacyjny.
* Limit streszczenia to graniczna wartość przestrzeni adresowej, która jest zarezerwowana dla każdego procesu na potrzeby tworzenia jego stosu oraz sterty.
* Ograniczenie streszczenia ma istotny wpływ na kompilację i wykonywanie programów, zwłaszcza jeśli nie jest ono prawidłowo rozumiane.
* Za pomocą narzędzia `ulimit` dostępnego w systemach Linux, można sprawdzić wartość i ustawić limit streszczenia.
* Problemy z zarządzaniem danymi w pamięci, takie jak przepełnienie bufora czy wycieki pamięci, mogą być spowodowane niewystarczającym rozumieniem limitu streszczenia.

## Notatki

Limit streszczenia, również nazywany "limitem wzrostu", to istotne pojęcie przy kompilacji i wykonywaniu programów. Ogranicza ono ilość pamięci, którą program może zająć podczas swojego wykonywania, a dokładniej, ilość dostępnej przestrzeni adresowej na potrzeby tworzenia stosu oraz sterty dla danego procesu.

Sam proces kompilacji zajmuje tylko nieznaczne ilości pamięci, podczas gdy w trakcie wykonywania, poszczególne części programu wymagają większych ilości pamięci. Dzięki ograniczeniu streszczenia, zapobiega się nadmiernemu zajmowaniu pamięci przez procesy, które mogą to zrobić w sposób niewłaściwy, takie jak przepełnienie bufora czy wyciek pamięci.

Jednym ze sposobów sprawdzenia i ustawienia limitu streszczenia w systemach Linux jest użycie `ulimit`, które jest dostępne we wbudowanym interpreterze bash. Polecenie `ulimit -s` pozwala sprawdzić bieżącą wartość limitu streszczenia, a `ulimit -S -s N` ustawia nową wartość limitu, gdzie `N` to liczba w bajtach. Należy pamiętać, że każdy proces Linux dziedziczy wartość limitu streszczenia po swoim procesie nadrzędnym, więc aby na pewno zmienić go, należy dokonać tego dla procesu o najwyższym poziomie nadrzędności.

Można powiedzieć, że rozumienie limitu streszczenia jest niezbędne do pisania bezpiecznego kodu, a jego zaniedbanie prowadzić może do problemów, takich jak przepełnienie stosu, które mogą prowadzić do kompromitacji bezpieczeństwa systemu. Należy wziąć pod uwagę, że wydajność i bezpieczeństwo kodu nie zawsze są wzajemnie sprzeczne wymagania, a dobre zarządzanie pamięcią może przyczynić się do poprawy obu tych aspektów.