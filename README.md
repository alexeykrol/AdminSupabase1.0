# Это учебный проект, имеющий 2 ветки:

main

3.0sb

В ветке main содержится варсия интегрированная с AirTable через API
В ветке 3.0sb содержится версия интегрированная с Supabase

Функционал веток - абсолютно идентичный и показывающий интеграцию простой админпанели, созданной в Bolt (React) и интегрированной с базой данных.

# 🔧 Airtable Admin Panel

Современная веб-панель администратора для управления переменными в Airtable с красивым интерфейсом и безопасным API.

![Admin Panel](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-blue) ![Netlify](https://img.shields.io/badge/Deploy-Netlify-green)

## ✨ Возможности

- 📊 **Просмотр текущих значений** переменных из Airtable
- ✏️ **Обновление переменных** через удобную форму
- 🔄 **Автоматическое обновление** данных
- 🎨 **Современный UI** с Tailwind CSS
- 🔒 **Безопасное API** через Netlify Functions
- 📱 **Адаптивный дизайн** для всех устройств
- ⚡ **Быстрая загрузка** и отзывчивый интерфейс

## 🚀 Демо

**Живая версия:** [https://11-adminpanel-001.netlify.app/](https://11-adminpanel-001.netlify.app/)

## 🛠 Технологии

- **Frontend:** React 18 + TypeScript + Vite
- **Стили:** Tailwind CSS
- **Иконки:** Lucide React
- **Backend:** Netlify Functions (Serverless)
- **База данных:** Airtable API
- **Деплой:** Netlify

## 📋 Требования

- Node.js 18+
- Аккаунт Airtable
- Аккаунт Netlify (для деплоя)

## ⚙️ Настройка проекта

### 1. Клонирование репозитория

```bash
git clone <your-repo-url>
cd airtable-admin-panel
npm install
```

### 2. Настройка Airtable

#### Создание базы данных:
1. Зайдите в [Airtable](https://airtable.com)
2. Создайте новую базу или используйте существующую
3. Создайте таблицу со следующими полями:
   - `variable_1` (Single line text)
   - `variable_2` (Single line text)
   - `Created` (Created time) - для сортировки

#### Получение API ключей:

**AIRTABLE_BASE_ID:**
- Откройте вашу базу в Airtable
- URL выглядит как `https://airtable.com/appXXXXXXXXXXXXXX/...`
- `appXXXXXXXXXXXXXX` - это ваш BASE_ID

**AIRTABLE_TABLE_ID:**
- Название вашей таблицы (например: "Variables")

**AIRTABLE_API_KEY:**
- Airtable → Account → Developer hub → Personal access tokens
- Создайте новый токен с правами на вашу базу
- Токен должен начинаться с `pat`

### 3. Локальная разработка

```bash
# Запуск dev сервера
npm run dev
```

Приложение откроется на `http://localhost:5173`

> **Примечание:** В режиме разработки используются моковые данные, так как Netlify Functions недоступны локально.

## 🚀 Деплой на Netlify

### Автоматический деплой:

1. **Подключите репозиторий:**
   - Зайдите в [Netlify Dashboard](https://app.netlify.com)
   - New site from Git → выберите ваш репозиторий

2. **Настройки сборки:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Переменные окружения:**
   - Site settings → Environment variables
   - Добавьте переменные:
   ```
   AIRTABLE_BASE_ID = appXXXXXXXXXXXXXX
   AIRTABLE_TABLE_ID = Variables
   AIRTABLE_API_KEY = patXXXXXXXXXXXXXX
   ```

### Ручной деплой:

```bash
# Сборка проекта
npm run build

# Деплой через Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📁 Структура проекта

```
├── src/
│   ├── App.tsx              # Главный компонент
│   ├── main.tsx            # Точка входа
│   ├── index.css           # Стили Tailwind
│   └── vite-env.d.ts       # TypeScript типы
├── netlify/
│   └── functions/
│       └── airtable-api.js # Serverless функция
├── netlify.toml            # Конфигурация Netlify
├── package.json            # Зависимости
├── tailwind.config.js      # Конфигурация Tailwind
├── tsconfig.json          # Конфигурация TypeScript
└── vite.config.ts         # Конфигурация Vite
```

## 🔧 API Endpoints

### GET `/api/airtable-api`
Получение текущих значений переменных

**Ответ:**
```json
{
  "records": [
    {
      "fields": {
        "variable_1": "значение 1",
        "variable_2": "значение 2"
      }
    }
  ]
}
```

### POST `/api/airtable-api`
Создание новой записи с переменными

**Тело запроса:**
```json
{
  "variable_1": "новое значение 1",
  "variable_2": "новое значение 2"
}
```

## 🐛 Отладка

### Проверка логов Netlify Functions:
1. Netlify Dashboard → ваш сайт
2. Functions → airtable-api → View logs

### Частые проблемы:

**500 Error:**
- Проверьте переменные окружения
- Убедитесь что API ключ имеет права на базу
- Проверьте правильность BASE_ID и TABLE_ID

**CORS ошибки:**
- Функция уже настроена для работы с CORS
- Проверьте что запросы идут на правильный домен

**Пустые данные:**
- Убедитесь что в таблице есть записи
- Проверьте названия полей в Airtable

## 🔒 Безопасность

- ✅ API ключи хранятся в переменных окружения
- ✅ Никаких секретов в исходном коде
- ✅ CORS настроен правильно
- ✅ Валидация входных данных
- ✅ Обработка ошибок

## 📝 Лицензия

MIT License - используйте свободно для любых целей.

## 🤝 Поддержка

Если возникли вопросы или проблемы:
1. Проверьте логи Netlify Functions
2. Убедитесь в правильности переменных окружения
3. Создайте Issue в репозитории

---

**Создано с ❤️ используя React, TypeScript и Netlify**
