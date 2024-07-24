# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

-keep public class com.horcrux.svg.** {*;}

-keep class com.mangosciences.vbc.BuildConfig { *; }

# Keep Sentry classes
-keep class io.sentry.** { *; }
-keep class io.sentry.android.** { *; }
-keep class io.sentry.android.core.** { *; }
-keep class io.sentry.android.fragment.** { *; }
-keep class io.sentry.android.timber.** { *; }
-keep class io.sentry.android.fragment.FragmentLifecycleIntegration.** { *; }
-keep class io.sentry.android.timber.SentryTimberIntegration.** { *; }

# Keep Timber classes
-keep class timber.log.** { *; }

# Keep AndroidX Fragment classes, as they might be used by Sentry
-keep class androidx.fragment.app.Fragment { *; }
-keep class androidx.fragment.app.FragmentManager { *; }
-keep class androidx.fragment.app.FragmentTransaction { *; }

# Keep AndroidX Lifecycle classes
-keep class androidx.lifecycle.** { *; }
-keep interface androidx.lifecycle.** { *; }

# Keep AndroidX Activity classes
-keep class androidx.activity.** { *; }