
# Tworzenie Aplikacji Internetowej za pomocą v0

## Cel Aplikacji
Stworzenie aplikacji do zarządzania listą zadań (to-do list) z prostym interfejsem.

---

## Kroki

### **Przygotowanie**

1. **Zarejestruj się w v0**  
   Załóż konto na [v0.dev](https://v0.dev). Wybierz darmowy plan lub skorzystaj z dostępnych kredytów.

2. **Zainstaluj wymagane narzędzia**  
   Upewnij się, że masz zainstalowane Node.js, npm/yarn oraz Git na swoim komputerze.

3. **Stwórz nowy projekt**  
   W terminalu uruchom:
   ```bash
   npx create-next-app@latest todo-app
   cd todo-app
   ```

4. **Zainstaluj Tailwind CSS**  
   Skorzystaj z [dokumentacji Tailwind CSS](https://tailwindcss.com/docs/installation) i skonfiguruj projekt.

---

### **Tworzenie aplikacji za pomocą v0**

5. **Zaloguj się w v0**  
   Otwórz panel [v0.dev](https://v0.dev) i zaloguj się, aby rozpocząć pracę.

6. **Rozpocznij nową sesję generowania**  
   Wybierz opcję „Start New UI” w panelu użytkownika.

7. **Opisz interfejs listy zadań**  
   Wprowadź prosty opis w języku angielskim, np.:
   ```
   Create a to-do list UI with an input field, an "Add Task" button, and a list of tasks. Each task should have a checkbox and a delete button.
   ```

8. **Wygeneruj kod**  
   Po otrzymaniu podglądu wygenerowanego interfejsu, pobierz kod w formacie React (Next.js) i Tailwind CSS.

9. **Dodaj kod do projektu**  
   Skopiuj wygenerowany kod komponentu i wklej go do nowego pliku, np. `components/TodoList.js`.

10. **Zaimportuj komponent**  
    W pliku `pages/index.js` zaimportuj komponent `TodoList` i wyświetl go:
    ```jsx
    import TodoList from '../components/TodoList';
    export default function Home() {
        return <TodoList />;
    }
    ```

---

### **Rozszerzenie funkcjonalności**

11. **Dodaj stan aplikacji**  
    W pliku `TodoList.js` użyj React Hook `useState` do przechowywania zadań:
    ```jsx
    const [tasks, setTasks] = useState([]);
    ```

12. **Obsługa dodawania zadań**  
    Dodaj funkcję `addTask` do obsługi dodawania nowych zadań:
    ```jsx
    const addTask = (task) => {
        setTasks([...tasks, { text: task, completed: false }]);
    };
    ```

13. **Obsługa checkboxów**  
    Dodaj logikę do oznaczania zadań jako ukończonych.

14. **Obsługa usuwania zadań**  
    Dodaj funkcję `deleteTask`:
    ```jsx
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };
    ```

---

### **Personalizacja interfejsu**

15. **Edytuj styl komponentów**  
    Zmodyfikuj klasy Tailwind CSS w generowanym kodzie, aby dostosować UI do preferencji.

16. **Dodaj responsywność**  
    Skonfiguruj style dla różnych rozdzielczości ekranów.

17. **Przetestuj aplikację lokalnie**  
    Uruchom aplikację:
    ```bash
    npm run dev
    ```
    Otwórz [http://localhost:3000](http://localhost:3000) i przetestuj interfejs.

---

### **Wdrożenie**

18. **Skonfiguruj repozytorium Git**  
    Zainicjuj repozytorium i wypchnij kod na GitHub:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin <repo_url>
    git push -u origin main
    ```

19. **Wdróż aplikację na Vercel**  
    Połącz projekt z kontem Vercel i wdroż aplikację, postępując zgodnie z instrukcjami w panelu.

20. **Przetestuj aplikację produkcyjną**  
    Otwórz wygenerowany URL w przeglądarce i przetestuj aplikację w środowisku produkcyjnym.

---

## **Efekt końcowy**
Studenci stworzą działającą aplikację do zarządzania zadaniami, wykorzystując generatywne narzędzie **v0** do szybkiego prototypowania interfejsów. Dzięki integracji z Tailwind CSS i React, aplikacja będzie miała zarówno solidne podstawy, jak i estetyczny wygląd.
