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

Проект реализует комплексные меры безопасности для защиты от распространенных уязвимостей:

### Защита от XSS (Cross-Site Scripting)
- ✅ **Санитизация входных данных** - все пользовательские вводы очищаются от потенциально опасных символов
- ✅ **Валидация на клиенте** - проверка длины и формата данных перед отправкой
- ✅ **Ограничение длины ввода** - максимум 500 символов для предотвращения DoS атак
- ✅ **Content Security Policy (CSP)** - строгая политика безопасности контента

### HTTP Security Headers
- ✅ **X-Content-Type-Options: nosniff** - предотвращает MIME-type sniffing
- ✅ **X-Frame-Options: DENY** - защита от clickjacking атак
- ✅ **X-XSS-Protection** - дополнительная защита от XSS в старых браузерах
- ✅ **Referrer Policy** - контроль передачи referrer информации
- ✅ **Permissions Policy** - ограничение доступа к API браузера

### Content Security Policy (CSP)
```
default-src 'self'                      - только ресурсы с того же домена
script-src 'self' 'unsafe-inline'       - скрипты только с того же домена
style-src 'self' 'unsafe-inline'        - стили только с того же домена
connect-src 'self' https://*.supabase.co - API запросы только к Supabase
frame-ancestors 'none'                   - запрет встраивания в iframe
```

### Безопасная конфигурация сборки
- ✅ **Минификация кода** - использование Terser для минификации
- ✅ **Удаление console.log** - очистка отладочной информации в production
- ✅ **Code splitting** - разделение кода на чанки для оптимизации
- ✅ **Отключение source maps** - защита исходного кода в production

### База данных и API
- ✅ **Row Level Security (RLS)** - включен для всех таблиц Supabase
- ✅ **API ключи в переменных окружения** - никаких секретов в коде
- ✅ **Валидация на сервере** - Supabase выполняет дополнительную валидацию
- ✅ **Обработка ошибок** - безопасное отображение ошибок без раскрытия деталей

### Валидация входных данных
```typescript
// Максимальная длина ввода
MAX_INPUT_LENGTH = 500

// Санитизация (удаление опасных символов)
sanitizeInput() - удаляет < > и обрезает до MAX_LENGTH

// Валидация формата и длины
validateInput() - проверяет соответствие требованиям
```

### Защита от атак
- ✅ **XSS Prevention** - санитизация и экранирование пользовательского ввода
- ✅ **CSRF Protection** - защита через Supabase Auth
- ✅ **Clickjacking Protection** - X-Frame-Options: DENY
- ✅ **MIME Sniffing Protection** - X-Content-Type-Options: nosniff
- ✅ **DoS Protection** - ограничение длины ввода и rate limiting на стороне Supabase

### Рекомендации по развертыванию
1. **HTTPS обязателен** - всегда используйте HTTPS в production
2. **Регулярно обновляйте зависимости** - `npm audit` и `npm audit fix`
3. **Настройте WAF** - используйте Web Application Firewall (Cloudflare, AWS WAF)
4. **Мониторинг** - настройте логирование и алерты на подозрительную активность
5. **Backup** - регулярное резервное копирование базы данных

### Проверка безопасности
```bash
# Проверка уязвимостей в зависимостях
npm audit

# Автоматическое исправление (если возможно)
npm audit fix

# Проверка сборки
npm run build
```

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