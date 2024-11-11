/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

#pragma once

#ifdef JORCS_STATIC_DEFINE
#  define JORCS_EXPORT
#  define JORCS_NO_EXPORT
#elif defined(_MSC_VER)
#  ifndef JORCS_EXPORT
#    ifdef JORCS_EXPORTS
        /* We are building this library */
#      define JORCS_EXPORT __declspec(dllexport)
#    else
        /* We are using this library */
#      define JORCS_EXPORT __declspec(dllimport)
#    endif
#  endif

#  ifndef JORCS_NO_EXPORT
#    define JORCS_NO_EXPORT
#  endif
#else
#  ifndef JORCS_EXPORT
#    ifdef JORCS_EXPORTS
        /* We are building this library */
#      define JORCS_EXPORT __attribute__((visibility("default")))
#    else
        /* We are using this library */
#      define JORCS_EXPORT __attribute__((visibility("default")))
#    endif
#  endif

#  ifndef JORCS_NO_EXPORT
#    define JORCS_NO_EXPORT __attribute__((visibility("hidden")))
#  endif
#endif

#if defined(_MSC_VER)
#  ifndef JORCS_DEPRECATED
#    define JORCS_DEPRECATED __declspec(deprecated)
#  endif
#else
#  ifndef JORCS_DEPRECATED
#    define JORCS_DEPRECATED __attribute__ ((__deprecated__))
#  endif
#endif

#ifndef JORCS_DEPRECATED_EXPORT
#  define JORCS_DEPRECATED_EXPORT JORCS_EXPORT JORCS_DEPRECATED
#endif

#ifndef JORCS_DEPRECATED_NO_EXPORT
#  define JORCS_DEPRECATED_NO_EXPORT JORCS_NO_EXPORT JORCS_DEPRECATED
#endif

#if 0 /* DEFINE_NO_DEPRECATED */
#  ifndef JORCS_NO_DEPRECATED
#    define JORCS_NO_DEPRECATED
#  endif
#endif
