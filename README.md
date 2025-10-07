# 🔧 Supabase Admin Panel

Современная веб-панель администратора для управления переменными в Supabase с красивым интерфейсом и безопасным API.

![Admin Panel](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-blue) ![Supabase](https://img.shields.io/badge/Database-Supabase-green)

## ✨ Возможности

- 📊 **Просмотр текущих значений** переменных из Supabase
- ✏️ **Обновление переменных** через удобную форму
- 🔄 **Автоматическое обновление** данных
- 🎨 **Современный UI** с Tailwind CSS
- 🔒 **Безопасное API** через Supabase RLS
- 📱 **Адаптивный дизайн** для всех устройств
- ⚡ **Быстрая загрузка** и отзывчивый интерфейс

## 🛠 Технологии

- **Frontend:** React 18 + TypeScript + Vite
- **Стили:** Tailwind CSS
- **Иконки:** Lucide React
- **База данных:** Supabase (PostgreSQL)
- **Аутентификация:** Supabase Auth
- **Деплой:** Bolt Hosting

## 📋 Требования

- Node.js 18+
- Аккаунт Supabase

## ⚙️ Настройка проекта

### 1. Клонирование репозитория

```bash
git clone <your-repo-url>
cd supabase-admin-panel
npm install
```

### 2. Настройка Supabase

#### Создание проекта:
1. Зайдите в [Supabase Dashboard](https://supabase.com/dashboard)
2. Создайте новый проект
3. Дождитесь завершения настройки

#### Получение API ключей:
- **VITE_SUPABASE_URL:** URL вашего проекта (Settings → API → Project URL)
- **VITE_SUPABASE_ANON_KEY:** Anon/Public ключ (Settings → API → Project API keys)

### 3. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Настройка базы данных

Таблица `variables` уже создана в проекте со следующими полями:
- `id` (uuid, primary key)
- `variable_1` (text)
- `variable_2` (text)
- `created_at` (timestamp)

### 5. Локальная разработка

```bash
# Запуск dev сервера
npm run dev
```

Приложение откроется на `http://localhost:5173`

## 🚀 Деплой

### Автоматический деплой через Bolt:

1. Нажмите кнопку "Deploy" в интерфейсе Bolt
2. Добавьте переменные окружения в настройках деплоя
3. Приложение будет автоматически развернуто

### Ручной деплой:

```bash
# Сборка проекта
npm run build

# Деплой на любой статический хостинг
# (Vercel, Netlify, GitHub Pages и т.д.)
```

## 📁 Структура проекта

```
├── src/
│   ├── App.tsx              # Главный компонент
│   ├── main.tsx            # Точка входа
│   ├── index.css           # Стили Tailwind
│   ├── lib/
│   │   └── supabase.ts     # Supabase клиент и функции
│   └── vite-env.d.ts       # TypeScript типы
├── package.json            # Зависимости
├── tailwind.config.js      # Конфигурация Tailwind
├── tsconfig.json          # Конфигурация TypeScript
└── vite.config.ts         # Конфигурация Vite
```

## 🔧 API Функции

### `getLatestVariables()`
Получение последней записи переменных

### `createVariables(variables)`
Создание новой записи с переменными

### `getAllVariables()`
Получение всех записей (для истории)

## 🐛 Отладка

### Проверка подключения к Supabase:
1. Убедитесь что переменные окружения установлены правильно
2. Проверьте URL и API ключ в Supabase Dashboard
3. Убедитесь что RLS политики настроены корректно

### Частые проблемы:

**Ошибки подключения:**
- Проверьте переменные окружения
- Убедитесь что проект Supabase активен
- Проверьте правильность URL и API ключа

**Ошибки доступа:**
- Проверьте RLS политики в Supabase
- Убедитесь что пользователь аутентифицирован (если требуется)

**Пустые данные:**
- Убедитесь что в таблице `variables` есть записи
- Проверьте правильность названий полей

## 🔒 Безопасность

- ✅ Row Level Security (RLS) включен для всех таблиц
- ✅ API ключи хранятся в переменных окружения
- ✅ Никаких секретов в исходном коде
- ✅ Валидация входных данных
- ✅ Обработка ошибок

## 📝 Лицензия

MIT License - используйте свободно для любых целей.

## 🤝 Поддержка

Если возникли вопросы или проблемы:
1. Проверьте логи в браузере (Developer Tools)
2. Убедитесь в правильности переменных окружения
3. Проверьте настройки Supabase проекта
4. Создайте Issue в репозитории

---

**Создано с ❤️ используя React, TypeScript и Supabase**