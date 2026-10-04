# G-Learning Firebase Architecture v1

**Date:** 2026-10-04  
**Status:** OWNER-APPROVED SHARED PROJECT ARCHITECTURE

## 1. Shared Firebase project

The G-Learning ecosystem uses one Firebase project as the shared backend container:

- Firebase Project display name: **G-Learning**
- Firebase Project ID: `roadmap-toan-ai`
- Project number: `789845564404`

The Project ID is unchanged from the existing Math integration.

## 2. Web apps inside the shared project

The project contains or will contain separate Firebase Web Apps for each learning site:

1. **Self-Learning-Math**
   - existing Math Web App
   - App ID: `1:789845564404:web:a066df0deed80d2d58b7a1`
   - current repository integration remains valid because Project ID and App ID did not change

2. **Self-Learning-English**
   - planned separate Firebase Web App for the Self-Learning-English GitHub site
   - must receive its own Firebase Web App ID and its own generated web config when registered

Changing the Firebase Project display name or an App nickname does not by itself require a Math code/config migration when the stable Project ID and App ID remain unchanged.

## 3. Shared services, separate app identity

Both sites may share project-level Firebase services where appropriate, including Authentication and Firestore, while retaining separate Web App identities.

Each site must use its own Firebase Web App configuration and App ID.

App Check / authorized-domain / hosting-origin configuration must be verified independently for each production origin when that app is enabled.

## 4. Data isolation rule

Math and English learner data must remain explicitly namespaced even when stored in the same Firebase project.

A valid future structure may use an app/domain boundary such as:

```text
users/{uid}/math/...
users/{uid}/english/...
```

or an equivalent explicit application namespace.

The exact Firestore schema is not implemented or frozen by this document. The invariant is that Math and English learning records must not be mixed without an explicit app/domain discriminator.

## 5. Shared account direction

If Firebase Authentication is adopted for both sites, the shared project may allow the same Firebase user identity to access both Self-Learning-Math and Self-Learning-English.

This is an architectural option, not an authorization to change the current learner-history model, migrate existing local data, or enable account sync now.

## 6. Current Math boundary

The current Math production config remains:

```text
projectId = roadmap-toan-ai
appId     = 1:789845564404:web:a066df0deed80d2d58b7a1
```

No Math runtime/config change is required solely because the Firebase Project display name is now **G-Learning** and the Math App nickname is now **Self-Learning-Math**.

## 7. Protected boundaries

This architecture record does not by itself:

- create the English Firebase Web App;
- enable Firebase Authentication;
- create or migrate Firestore learner records;
- change Math local-storage history;
- change App Check settings;
- change hosting or deployment;
- change Gemini model configuration;
- expose any private credential.

When Self-Learning-English is registered, record its generated App ID/config in the English project and mirror the shared-project architecture there.
