ORIGINAL ENGLISH VERSION:

# Cashmash Project Overview

## Project Type and Framework
Cashmash is a mobile application built using **Expo** with **React Native**, following the **Expo Router** file-based routing system. It's a modern cross-platform application that can run on Android, iOS, and web from a single codebase.

## Project Structure
The application follows the standard Expo Router architecture with the following key directories:

- **app/**: Contains the main application routing and screens
- **assets/**: Stores images and other static assets
- **components/**: Reusable UI components with theming support
- **constants/**: Configuration files like theme colors
- **hooks/**: Custom React hooks for common functionality
- **scripts/**: Utility scripts for project management

## Application Architecture

### Routing System
The app uses Expo Router's file-based routing system with:
- A main tab-based navigation structure
- Two primary tabs: "Home" and "Explore"
- A modal screen accessible from the main navigation

### Main Screens
1. **Home Screen** (`app/(tabs)/index.tsx`): 
   - Welcome screen with interactive elements
   - Features a parallax scrolling effect
   - Includes animated components (HelloWave)
   - Provides guidance for developers

2. **Explore Screen** (`app/(tabs)/explore.tsx`):
   - Documentation and examples of app features
   - Collapsible sections explaining different aspects
   - Demonstrates file-based routing, theming, and animations

3. **Modal Screen** (`app/modal.tsx`):
   - Accessible as a modal overlay
   - Simple navigation back to home screen

### UI Components
The app includes a comprehensive set of themed components:
- **ThemedText**: Text components with light/dark mode support
- **ThemedView**: View containers with theme-aware styling
- **ParallaxScrollView**: Custom scroll view with parallax effect
- **Collapsible**: Expandable/collapsible sections
- **IconSymbol**: Vector icons with theme support
- **HelloWave**: Animated component demonstrating reanimated library

### Theming System
The application implements a sophisticated theming system:
- Supports both light and dark modes
- Automatic theme detection based on system preferences
- Consistent color palette across the app
- Platform-specific font handling

## Technical Features

### Cross-Platform Support
- **Android**: Full support with adaptive icons and edge-to-edge display
- **iOS**: Tablet support and platform-specific UI elements
- **Web**: Static output with responsive design

### Dependencies
The project uses modern React Native ecosystem libraries:
- **React Navigation**: For routing and navigation
- **Expo Router**: File-based routing system
- **React Native Reanimated**: For smooth animations
- **Expo Image**: Optimized image handling
- **React Native Gesture Handler**: For touch interactions

### Development Features
- **Hot Reloading**: Real-time updates during development
- **TypeScript**: Full type safety
- **ESLint**: Code quality enforcement
- **New Architecture**: Enabled for better performance

## Configuration
The app.json file reveals several important configurations:
- App name: "cashmash"
- Version: 1.0.0
- Portrait orientation
- Custom icons and splash screen
- Support for both light and dark themes
- Web output as static files

## Project Status
Based on the files I've examined, Cashmash appears to be in the initial development phase using the standard Expo template. The current implementation includes example code to help developers get started, with instructions on how to reset the project to a blank state when ready to build the actual application.

The project is well-structured with proper separation of concerns, following React Native and Expo best practices. It's ready for feature development with a solid foundation that includes theming, navigation, and cross-platform compatibility already implemented.

## Next Steps
To continue development on Cashmash, the team would typically:
1. Replace the example content with actual application features
2. Implement the core functionality of the app
3. Add any required backend services or APIs
4. Customize the UI/UX to match the app's specific requirements
5. Use the provided reset-project script to clear example code when ready

The project provides a solid foundation for building a feature-rich, cross-platform mobile application with modern React Native practices.

---

ПЕРЕВОД НА РУССКИЙ ЯЗЫК:

# Обзор проекта Cashmash

## Тип проекта и фреймворк
Cashmash - это мобильное приложение, построенное с использованием **Expo** и **React Native**, с использованием системы файловой маршрутизации **Expo Router**. Это современное кроссплатформенное приложение, которое может работать на Android, iOS и веб-платформе из единого кодовой базы.

## Структура проекта
Приложение следует стандартной архитектуре Expo Router со следующими основными каталогами:

- **app/**: Содержит основную маршрутизацию приложения и экраны
- **assets/**: Хранит изображения и другие статические ресурсы
- **components/**: Повторно используемые компоненты пользовательского интерфейса с поддержкой тем
- **constants/**: Файлы конфигурации, такие как цветовые темы
- **hooks/**: Пользовательские React-хуки для общей функциональности
- **scripts/**: Утилиты для управления проектом

## Архитектура приложения

### Система маршрутизации
Приложение использует систему файловой маршрутизации Expo Router с:
- Основной навигацией в виде вкладок
- Двумя основными вкладками: "Главная" и "Исследовать"
- Модальным экраном, доступным из основной навигации

### Основные экраны
1. **Главный экран** (`app/(tabs)/index.tsx`): 
   - Экран приветствия с интерактивными элементами
   - Включает эффект прокрутки с параллаксом
   - Содержит анимированные компоненты (HelloWave)
   - Предоставляет руководство для разработчиков

2. **Экран исследования** (`app/(tabs)/explore.tsx`):
   - Документация и примеры функций приложения
   - Сворачиваемые разделы с объяснением различных аспектов
   - Демонстрирует файловую маршрутизацию, темы и анимации

3. **Модальный экран** (`app/modal.tsx`):
   - Доступен как модальное окно
   - Простая навигация на главный экран

### Компоненты пользовательского интерфейса
Приложение включает комплексный набор компонентов с поддержкой тем:
- **ThemedText**: Текстовые компоненты с поддержкой светлой/темной темы
- **ThemedView**: Контейнеры просмотра с учетом темы
- **ParallaxScrollView**: Пользовательский прокручиваемый вид с эффектом параллакса
- **Collapsible**: Разделы с возможностью расширения/свертывания
- **IconSymbol**: Векторные иконки с поддержкой темы
- **HelloWave**: Анимированный компонент, демонстрирующий библиотеку reanimated

### Система тем
Приложение реализует сложную систему тем:
- Поддержка светлой и темной тем
- Автоматическое определение темы на основе системных настроек
- Последовательная цветовая палитра по всему приложению
- Специфичные для платформы шрифты

## Технические особенности

### Поддержка кроссплатформенности
- **Android**: Полная поддержка с адаптивными иконками и отображением по краям
- **iOS**: Поддержка планшетов и специфичные для платформы элементы пользовательского интерфейса
- **Веб**: Статический вывод с адаптивным дизайном

### Зависимости
Проект использует современные библиотеки экосистемы React Native:
- **React Navigation**: Для маршрутизации и навигации
- **Expo Router**: Система файловой маршрутизации
- **React Native Reanimated**: Для плавных анимаций
- **Expo Image**: Оптимизированная обработка изображений
- **React Native Gesture Handler**: Для сенсорных взаимодействий

### Особенности разработки
- **Горячая перезагрузка**: Обновления в реальном времени во время разработки
- **TypeScript**: Полная безопасность типов
- **ESLint**: Обеспечение качества кода
- **Новая архитектура**: Включена для лучшей производительности

## Конфигурация
Файл app.json раскрывает несколько важных конфигураций:
- Название приложения: "cashmash"
- Версия: 1.0.0
- Портретная ориентация
- Пользовательские иконки и заставка
- Поддержка светлой и темной тем
- Веб-вывод в виде статических файлов

## Состояние проекта
На основе файлов, которые я проанализировал, Cashmash, похоже, находится на начальной стадии разработки с использованием стандартного шаблона Expo. Текущая реализация включает примеры кода, чтобы помочь разработчикам начать работу, с инструкциями о том, как сбросить проект до пустого состояния, когда будете готовы.

Проект хорошо структурирован с надлежащим разделением обязанностей, следуя лучшим практикам React Native и Expo. Он готов к разработке функций с прочным фундаментом, который включает темы, навигацию и кроссплатформенную совместимость, уже реализованные.

## Следующие шаги
Чтобы продолжить разработку Cashmash, команда обычно:
1. Заменит пример содержимого на реальные функции приложения
2. Реализует основную функциональность приложения
3. Добавит необходимые бэкенд-сервисы или API
4. Настроит пользовательский интерфейс/UX в соответствии с конкретными требованиями приложения
5. Использует предоставленный скрипт сброса проекта, чтобы очистить пример кода, когда будет готов

Проект обеспечивает прочный фундамент для создания многофункционального, кроссплатформенного мобильного приложения с современными практиками React Native.