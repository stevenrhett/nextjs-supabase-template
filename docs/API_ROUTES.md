# API Routes Documentation

## Health Check

**GET** `/api/health`

Returns the health status of the application.

### Response
```json
{
  "status": "healthy",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

## Authentication Routes

### Login
**POST** `/api/auth/login`

### Register
**POST** `/api/auth/register`

### Logout
**POST** `/api/auth/logout`

## Error Handling

All API routes return consistent error responses:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

## Rate Limiting

- 100 requests per minute per IP
- 1000 requests per hour per authenticated user
