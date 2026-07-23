class AppException(Exception):
    """Base application exception."""

    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code
        super().__init__(message)


class NotFoundException(AppException):

    def __init__(self, message="Resource not found"):
        super().__init__(message, 404)


class UnauthorizedException(AppException):

    def __init__(self, message="Unauthorized"):
        super().__init__(message, 401)


class BadRequestException(AppException):

    def __init__(self, message="Bad request"):
        super().__init__(message, 400)


class AIServiceException(AppException):

    def __init__(self, message="AI service error"):
        super().__init__(message, 500)